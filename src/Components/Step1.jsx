import React from 'react'


const Step1 = ({currentStep, setCurrentStep}) => {

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  }
  return (
    <div>
      <div className="info px-28 pt-14">
        <h1 className='text-2xl font-bold'>Personal info</h1>
        <h4 className=' py-2'>Please provide your name, email address, and phone number.</h4>
        <div className="form py-2">
            <div className="label text-xs font-bold py-2">Name</div>
            <input type="text" placeholder='e.g. Stephen King' className='border-2 w-full p-2 rounded-md' />
        </div>
        <div className="form py-2">
            <div className="label text-xs font-bold py-2">Email Address</div>
            <input type="text" placeholder='e.g. stephenking@lorem.com' className='border-2 w-full p-2 rounded-md' />
        </div>
        <div className="form py-2">
            <div className="label text-xs font-bold py-2">Phone Number</div>
            <input type="text" placeholder='e.g. +1 234 567 890' className='border-2 w-full p-2 rounded-md' />
        </div>
        <div className='flex justify-between'>
            <div></div>
            <button onClick={handleNext} className='mt-24 bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded'>Next Step</button>
        </div>
      </div>

    </div>
  )
}

export default Step1
