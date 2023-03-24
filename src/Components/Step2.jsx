import React, { useState } from 'react'
import iconArcade from "../assets/images/icon-arcade.svg"
import iconAdvanced from "../assets/images/icon-advanced.svg"
// import checkMark from "../assets/images/icon-checkmark.svg"
// import thankyou from "../assets/images/icon-thank-you.svg"
import iconPro from "../assets/images/icon-pro.svg"
import { Switch } from '@mui/material'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Step2 = ({setCurrentStep}) => {

  const [yearlySubscription, setYearlySubscription] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => prev+1)
  }

  const handleBack = () => {
    setCurrentStep((prev) => prev-1)
  }

  const handleSwich = () => {
    setYearlySubscription((prev) => !prev)
  }


  return (
    <div>
       <div className="info px-28 pt-14 relative">
       <h1 className='text-2xl font-bold'>Select your plan</h1>
        <h4 className=' py-2'>You have the opiton of monthly or yearly billing.</h4>
        <div className="sublist w-[28rem]">
        <div className="cards mt-8 flex space-x-2">
            <div className="card border-blue-400 border-2 cursor-pointer rounded-lg p-2 w-1/2">
                <img src={iconArcade} alt="" />
                <div className='smallarcade'>
                <h1 className='card-text mt-12 font-bold'>Arcade</h1>
                <h4 className='text-sm'>{yearlySubscription ? '$90/yr' : '$9/mo'}</h4>
                </div>
                {yearlySubscription && <h4 className='year-sub text-sm text-blue-500'>2 months free</h4>}
            </div>
            <div className="card border-2 rounded-lg p-2 w-1/2">
                <img src={iconAdvanced} alt="" />
                <div className='smallarcade'>
                <h1 className='card-text mt-12 font-bold'>Advanced</h1>
                <h4 className='text-sm'>{yearlySubscription ? '$120/yr' : '$12/mo'}</h4>
                </div>
                {yearlySubscription &&  <h4 className='year-sub year-sub1 text-sm text-blue-500'>2 months free</h4>}
            </div>
            <div className="card border-2 rounded-lg p-2 w-1/2">
                <img src={iconPro} alt="" />
                <div className='smallarcade'>
                <h1 className='card-text mt-12 font-bold'>Pro</h1>
                <h4 className='text-sm'>{yearlySubscription ? '$150/yr' : '$15/mo'}</h4>
                </div>
                {yearlySubscription &&  <h4 className='year-sub text-sm text-blue-500'>2 months free</h4>}
            </div>

            
        </div>

        <div className="bar flex justify-center items-center space-x-4 mt-8 bg-gray-100 rounded-md">
                <div className="sub text-sm font-bold">Monthly</div>
                <Switch {...label} onChange={handleSwich} checked={yearlySubscription} />
                <div className="sub">Yearly</div>
            </div>
            <div className='flex justify-between mt-24 down-btn'>
            <button onClick={handleBack} className=' bg-gray-100 hover:bg-blue-300 text-blue-500 text-xs font-bold py-2 px-4 rounded'>Go Back</button>
            <button onClick={handleNext} className=' bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded'>Next Step</button>
            </div>
            </div>

       </div>
    </div>
  )
}

export default Step2
