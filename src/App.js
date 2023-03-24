import logo from "./logo.svg";
import "./App.css";
import Sidemenu from "./Components/Sidemenu";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Step4 from "./Components/Step4";
import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='bg-whole sm:m-0 sm:p-0'>
      <div className="topmenu md:mx-72 md:my-4 sm:m-0 sm:p-0 md:w-[64rem] sm:w-0 md:p-4 bg-white rounded-lg flex">
        <Sidemenu currentStep={currentStep} />
        {currentStep === 1 && <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <Step2 setCurrentStep={setCurrentStep} />}
        {currentStep === 3 && <Step3 setCurrentStep={setCurrentStep} />}
        {currentStep === 4 && <Step4 setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
}

export default App;
