import FirstForm from "./FirstForm";

const Home = ({steps, setSteps }) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="w-3/4 mb-8">
        {steps.step1 && <FirstForm setSteps={setSteps} />}
        {steps.step2 && <SecondForm setSteps={setSteps} />}
        {steps.step3 && <ThirdForm setSteps={setSteps} />}
        {steps.step4 && <FourthForm setSteps={setSteps} />}
         {steps.step5 && <FifthForm setSteps={setSteps} />}
      </div>

      <div className="text-center">
        <img
          src="https://www.bankofamerica.com/assets/images/home/hero/hero-personal-financial-management.png"
          alt="Home"
          className="w-1/2 mx-auto"
        />
        <p className="mt-4">
          Please follow the steps below to complete your application.
        </p>
      </div>
    </main>
  );
};

export default Home;
