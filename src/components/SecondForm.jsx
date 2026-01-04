import { useState } from "react";
import {
  validateEmail,
  validatePhone,
  validateConfirmPhone,
  validateCountry,
  validateLegalAgreement,
} from "../utils/validations";

const SecondForm = ({setSteps }) => {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    phone: "",
    confirmNumber: "",
    acceptLegal: false,
  });
  const [errors, setErrors] = useState({});
  let isFormValid = false;

  const submitHandler = (e) => {
    e.preventDefault();
    const newErrors = {
      email: validateEmail(formData.email),
      country: validateCountry(formData.country),
      phone: validatePhone(formData.phone),
      confirmNumber: validateConfirmPhone(
        formData.phone,
        formData.confirmNumber
      ),
      acceptLegal: validateLegalAgreement(formData.acceptLegal),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(err => err);
  if (hasErrors) return;
  else{
     isFormValid= true;
    setSteps({
      step1: true,
      step2: true,
      step3: true,
      step4: false,
    });
  }
  };

  return (
    <form className="flex flex-col gap-4 justify-center" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        className="border shadow rounded-xl h-8"
        value={formData.name}
        onChange={(e) => setFormData({...formData, setName  :e.target.value})}
      ></input>
      {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name }</span>}

      <label htmlFor="address">Address: </label>
      <input
        id="address"
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({...formData, setAddress:e.target.value})}
      ></input>
        {errors.address && <span className="text-red-500 text-sm mt-1">{errors.address }</span>}
        onChange={(e) => setFormData({...formData, setPhoneNumber:e.target.value})}

      

      <div className="my-4">
        <div className="font-bold">Info about new acoount</div>
        <p>
          Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
          ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
          lorem ipsum
        </p>
      </div>
      <div className="my-4">
        <div className="font-bold">What this means for you?</div>
        <p>
          Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
          ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
          lorem ipsum
        </p>
      </div>
      <button type="submit" className=""  disabled={!isFormValid}>
        Next
      </button>
    </form>
  );
};

export default SecondForm;
