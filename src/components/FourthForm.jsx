import { useState } from "react";
import {
  validateEmail,
  validatePhone,
  validateConfirmPhone,
  validateCountry,
  validateLegalAgreement,
} from "../utils/validations";

const FourthForm = ({setSteps }) => {
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
      step3: false,
      step4: false,
    });
  }
  };

  return (
    <form className="flex flex-col gap-4 justify-center" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        className="border shadow rounded-xl h-8"
        value={formData.email}
        onChange={(e) => setFormData({...formData, setEmail:e.target.value})}
      ></input>
      {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email }</span>}

      <label htmlFor="country">Country: </label>
      <select
        id="country"
        value={formData.country}
        onChange={(e) => setFormData({...formdata, setCountry:e.target.value})}
      >
        <option hidden>Select Country</option>
        <option value="India">India</option>
        <option value="US">US</option>
        <option value="UK">UK</option>
      </select>
        {errors.country && <span className="text-red-500 text-sm mt-1">{errors.country }</span>}

      <label htmlFor="phone">Phone: </label>
      <input
        id="phone"
        type="phone"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({...formData, setPhoneNumber:e.target.value})}
      ></input>
        {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone }</span>}

      <label htmlFor="confirmPhone">Confirm Phone: </label>
      <input
        id="confirmPhone"
        type="phone"
        placeholder="Confirm Phone Number"
        value={formData.confirmNumber}
        onChange={(e) => setFormData({...formData, setConfirmNumber:e.target.value})}
      ></input>
      {errors.confirmNumber && <span className="text-red-500 text-sm mt-1">{errors.confirmNumber}</span>}
      
      <input
        type="checkbox"
        id="legal"
        checked={formData.acceptLegal ? "" : "checked"}
        onChange={(e) => setFormData({...formData, setAcceptLegal:e.target.checked})}
      ></input>
      <label htmlFor="legal">Accept the legal agreement</label>
      {errors.acceptLegal && <span className="text-red-500 text-sm mt-1">{errors.acceptLegal}</span>}

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

export default FourthForm;
