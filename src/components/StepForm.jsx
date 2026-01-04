import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Header from "./Header";

import {
  validateEmail,
  validatePhone,
  validateConfirmPhone,
  validateCountry,
  validateLegalAgreement,
} from "../utils/validations";

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    country: "",
    phone: "",
    confirmNumber: "",
    acceptLegal: false,

    firstName: "",
    lastName: "",
    dob: "",

    signature: "",
    amount: "",

    enrollOnline: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      const emailErr = validateEmail(formData.email);
      if (emailErr) newErrors.email = emailErr;

      const countryErr = validateCountry(formData.country);
      if (countryErr) newErrors.country = countryErr;

      const phoneErr = validatePhone(formData.phone);
      if (phoneErr) newErrors.phone = phoneErr;

      const confirmErr = validateConfirmPhone(
        formData.phone,
        formData.confirmNumber
      );
      if (confirmErr) newErrors.confirmNumber = confirmErr;

      const legalErr = validateLegalAgreement(formData.acceptLegal);
      if (legalErr) newErrors.acceptLegal = legalErr;
    }

    if (currentStep === 2) {
      if (!formData.firstName) newErrors.firstName = "First name required";
      if (!formData.lastName) newErrors.lastName = "Last name required";
    }

    if (currentStep === 3 && !formData.signature) {
      newErrors.signature = "Signature required";
    }

    if (currentStep === 4 && !formData.amount) {
      newErrors.amount = "Amount required";
    }
    // if (currentStep === 5) {
    //   setIsSubmitted(true);
    // } else {
    //   setCurrentStep((prev) => prev + 1);
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep === 5) {
      setIsSubmitted(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setErrors({});
    setFormData({
      email: "",
      country: "",
      phone: "",
      confirmNumber: "",
      acceptLegal: false,

      firstName: "",
      lastName: "",
      dob: "",

      signature: "",
      amount: "",

      enrollOnline: false,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            🎉 Application Submitted Successfully
          </h2>
          <p className="text-gray-600">
            Thank you {formData.firstName} for completing your account application.
          </p>
          <button
            className="rounded border px-3 py-2 cursor-pointer my-6 "
            onClick={resetForm}
          >
            Close X
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header currentStep={currentStep} />

      <div className="flex gap-10 m-6">
        {/* Form */}
        <div className="w-1/2 p-6 bg-white shadow rounded-xl">
          {currentStep === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 4 && (
            <Step4
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStep === 5 && (
            <Step5
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button onClick={handleBack} className="px-4 py-2 border rounded">
                Back
              </button>
            )}
            {currentStep <= 5 && (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                {currentStep === 5 ? "Submit" : "Next"}
              </button>
            )}
          </div>
        </div>

        {/* Right Hero */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center rounded-xl">
          <img src="https://placehold.co/400x600" alt="hero" />
        </div>
      </div>
    </>
  );
};

export default StepForm;
