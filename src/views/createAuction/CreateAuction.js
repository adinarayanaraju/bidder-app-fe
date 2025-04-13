import React, { useState } from "react";
import dummyIcon from "../../assets/icons/user.svg";
import CustomStepper from "../../sharedComponents/customStepper/CustomStepper";

export default function CreateAuction() {
  const [activeStep, setActiveStep] = useState(0);
  const createAuctionStep = [
    {
      label: "Step one",
      icon: { dummyIcon },
    },
    {
      label: "Step Two",
      icon: { dummyIcon },
    },
    {
      label: "Step Three",
      icon: { dummyIcon },
    },
  ];

  //   Validation for each step
  const isStepValid = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return true;
      case 1:
        return true;
      case 2:
        return isStepValid(0) && isStepValid(1);
      default:
        return false;
    }
  };

  const isStepCompleted = (index) => {
    return index < activeStep || (index === activeStep && isStepValid(index));
  };

  const handleStepClick = (index) => {
    if (index === 0 || isStepValid(index)) {
      setActiveStep(index);
    }
  };
  const handleNext = () => {
    if (isStepValid(activeStep)) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <div>
      <CustomStepper
        steps={createAuctionStep}
        activeStep={activeStep}
        onStepClick={handleStepClick}
        isStepCompleted={isStepCompleted}
      />
      <div>
        <button onClick={handlePrev} disabled={activeStep === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={!isStepValid(activeStep)}>
          Next
        </button>
      </div>
    </div>
  );
}
