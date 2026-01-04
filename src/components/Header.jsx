const Header = ({ currentStep }) => {
  const steps = [
    { icon: "💼", label: "Account Application" },
    { icon: "👤", label: "Personal Information" },
    { icon: "✍️", label: "Sign & Agreement" },
    { icon: "💳", label: "Fund your account" },
    { icon: "🔒", label: "Enroll in online banking" },
  ];

  return (
    <header className="p-4 bg-white shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Logo</div>
 {/* Steps */}
      <div className="flex items-center justify-between relative gap-6">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div key={index} className="flex-1 flex flex-col items-center relative border h-25 p-4 rounded-xl">
              {/* Step circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-1
                  ${isCompleted ? "bg-green-500 text-white" : ""}
                  ${isActive ? "bg-blue-500 text-white" : ""}
                  ${!isActive && !isCompleted ? "bg-gray-300 text-gray-600" : ""}`}
              >
                {step.icon}
              </div>
              <div className="text-center text-sm">{step.label}</div>

              {/* Connecting line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute top-1/2 left-full h-1 w-6 transform -translate-y-1/2
                    ${currentStep > stepNumber ? "bg-green-500" : "bg-gray-300"}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
        <ul className="flex gap-4">
          <li>📞</li>
          <li>💬</li>
          <li>🌍</li>
        </ul>
      </div>

     
    </header>
  );
};

export default Header;
