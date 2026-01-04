import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });
  return (
    <>
      <Header steps={steps} />
      <Home steps={steps} setSteps={setSteps} />
      <Footer />
    </>
  );
}

export default App;
