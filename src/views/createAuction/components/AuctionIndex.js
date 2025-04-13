import React, { useState } from "react";
import cameraIcon from "./../../../assets/icons/camera.svg";
import editIcon from "./../../../assets/icons/edit.svg";
import eyeIcon from "./../../../assets/icons/eye.svg";
import CustomStepper from "./../../../sharedComponents/customStepper/CustomStepper";

export default function AuctionIndex() {
  const [activeStep, setActiveStep] = useState(0);
  const createAuctionStep = [
    {
      label: "Description",
      icon: editIcon,
    },
    {
      label: "Photos",
      icon: cameraIcon,
    },
    {
      label: "Preview",
      icon: eyeIcon,
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
      {/* Component goes here on the basis of active index */}
      <div className="auction-form-card container-fluid">


        {/* Button for next and prev */}
        <div className="d-flex justify-content-center align-items-cents gap-4 mt-4 auction-stepper-btn">
          <button onClick={handlePrev} disabled={activeStep === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!isStepValid(activeStep)}
            className="next-btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
