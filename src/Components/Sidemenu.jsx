import React, { useState } from "react";
import sidebackImg from "../assets/images/bg-sidebar-desktop.svg";
import sideMobImg from "../assets/images/bg-sidebar-mobile.svg"
import "./sidemenu.css"
const Sidemenu = ({currentStep}) => {
  
  
  const stepperArr = [
    { step: "STEP 1", info: "YOUR INFO" },
    { step: "STEP 2", info: "SELECT PLAN" },
    { step: "STEP 3", info: "ADD-ONS" },
    { step: "STEP 4", info: "SUMMARY" },
  ];

  return (
    <div className="relative">
      <img src={sidebackImg} alt="" className="hidden md:block lg:block xl:block" />
      <img src={sideMobImg} alt="" className="sm:block lg:hidden xl:hidden" />
      <div className="text-menu absolute top-0 left-0 m-8 sm:space-x-0 sm:flex md:block md:space-x-0">

        {stepperArr.map((stepper,index) => {
          return (
            <div className={index === 1 ? 'stepper flex sm:ml-0 ml-4 items-center justify-center mt-8' : 'stepper flex items-center justify-center mt-8'}>
          <div className={currentStep === index+1 ? 'stepCount rounded-full w-1 h-1 bg-blue-300 p-3 flex items-center justify-center' : 'stepCount border rounded-full w-1 h-1 border-white p-3 sm:text-lg text-white flex items-center justify-center'}>
            {index+1}
          </div>
          <div className="mx-4 text-white md:flex md:flex-col items-start justify-center hidden ">
            <h4 className="text-xs">{stepper.step}</h4>
            <h2 className="font-medium text-sm">{stepper.info}</h2>
          </div>
          {/* <div class="rounded-full border-2 w-1 h-1 border-red-500 font-bold text-red-500 p-2 my-2 flex items-center justify-center text-center">2</div> */}
        </div>
          )
        })}

        
        
      </div>
    </div>
  );
};

export default Sidemenu;


//  <div className="smtext">Thanks for confirming your subscription we hope you have fun using our platform. If you ever need any support, please feel free to email us at support jakkanisagar19@gmail.com</div>
