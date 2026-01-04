import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StepForm from "./components/StepForm";
import Footer from "./components/Footer";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    phone: "",
    confirmNumber: "",
    acceptLegal: false,
    name: "",
    address: "",
    signature: "",
    agreeTerms: false,
    accountType: "",
    initialDeposit: "",
    fundingMethod: "",
    cardNumber: "",
    bankName: "",
    enrollOnlineBanking: false,
  });
  return (
    <>
      <StepForm
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        formData={formData}
        setFormData={setFormData}
      />
      <Footer />
    </>
  );
}

export default App;
