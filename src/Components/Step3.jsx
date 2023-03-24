import React from 'react'

const Step3 = ({setCurrentStep}) => {

  const handleNext = () => {
    setCurrentStep((prev) => prev+1)
  }

  const handleBack = () => {
    setCurrentStep((prev) => prev-1)
  }

  return (
    <div>
      <div className="info px-28 pt-14">
      <h1 className='text-2xl font-bold'>Pick add-ons</h1>
      <h4 className=' py-2 mb-8'>Add-ons help enhance your gaming experience.</h4>

      <div className="inputs my-4 border-2 p-2 flex justify-between w-[28rem] space-x-4 rounded-lg">
        <div className="service flex flex-row space-x-4">
          <input type="checkbox" className='mx-4' />
          <div>
          <h4 className='text-xs font-semibold'>Online Service</h4>
          <h4 className='games text-xs font-semibold'>Acess to multiplayer games</h4>
          </div>
        </div>
        <div className='flex place-items-center justify-center'>
        <div className="cost text-sm">+$1/mon</div>
        </div>
      </div>

      <div className="inputs my-4 border-2 p-2 flex justify-between space-x-4 rounded-lg">
        <div className="service flex flex-row space-x-4">
          <input type="checkbox" className='mx-4' />
          <div>
          <h4 className='text-xs font-semibold'>Online Service</h4>
          <h4 className='games text-xs font-semibold'>Acess to multiplayer games</h4>
          </div>
        </div>
        <div className='flex place-items-center justify-center'>
        <div className="cost text-sm">+$1/mon</div>
        </div>
      </div>

      <div className="inputs my-4 border-2 p-2 flex justify-between space-x-4 rounded-lg">
        <div className="service flex flex-row space-x-4">
          <input type="checkbox" className='mx-4' />
          <div>
          <h4 className='text-xs font-semibold'>Online Service</h4>
          <h4 className='games text-xs font-semibold'>Acess to multiplayer games</h4>
          </div>
        </div>
        <div className='flex place-items-center justify-center'>
        <div className="cost text-sm">+$1/mon</div>
        </div>
      </div>

      <div className='mt-40 flex justify-between down-btn2'>
            <button onClick={handleBack} className=' bg-gray-100 hover:bg-blue-300 text-blue-500 text-xs font-bold py-2 px-4 rounded'>Go Back</button>
            <button onClick={handleNext} className=' bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded'>Next Step</button>
            </div>


      </div>
    </div>
  )
}

export default Step3
