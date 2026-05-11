import { FaCheckCircle } from "react-icons/fa";

const Stepper = ({ currentStep, completedSteps }) => {
  const steps = [
    { id: 1, title: "Server Type", description: "Choose management type" },
    { id: 2, title: "Package", description: "Select server package" },
    { id: 3, title: "RAM", description: "Choose RAM configuration" },
    { id: 4, title: "Storage", description: "Select storage options" },
    { id: 5, title: "Review", description: "Finalize & checkout" },
  ];

  return (
    <div className="mb-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                    completedSteps.includes(step.id)
                      ? "border-blue-500 bg-blue-500 text-white"
                      : currentStep === step.id
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  {completedSteps.includes(step.id) ? (
                    <FaCheckCircle className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div
                    className={`text-sm font-medium ${
                      completedSteps.includes(step.id) ||
                      currentStep === step.id
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-400">
                    {step.description}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`mx-4 mb-16 h-0.5 w-16 md:w-24 ${
                    completedSteps.includes(step.id)
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
