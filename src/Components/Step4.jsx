import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import thankImg from "../assets/images/icon-thank-you.svg"

const Step4 = ({setCurrentStep}) => {

    const [openThankyou, setOpenThankyou] = useState(false);
    const [openLoader, setOpenLoader] = useState(false);

    const handleBack = () => {
        setCurrentStep((prev) => prev-1)
    }

    const handleConfirm = () => {
        // setOpenLoader(true);
        // setInterval(() => {
            // setOpenThankyou(true);
            alert("You have succesfully subscribed")
            setCurrentStep(1)
            // setOpenLoader(false);
        // },[2000])
    }

  return (
    <div>
      <div className="info px-20 pt-14">
        {!openThankyou && <div>
      <h1 className='text-2xl font-bold'>Finishing up</h1>
      <h4 className=' py-2 mb-8'>Double check everything looks like OK before confirming.</h4>
      <div className='step4w w-[30rem]'>
      <div className="sub-list bg-gray-50 p-4">
        <div className='flex justify-between items-center'>
        <div>
        <h3 className='text-sm font-bold'>Arcade (Monthly)</h3>
        <h6 className='text-xs'>Change</h6>
        </div>
        <div className="dollar">$9/mon</div>
        </div>
        <hr className='my-4' />
        <div className='flex justify-between text-xs my-3'>
            <p>Oline Service</p>
            <p>+$1/mo</p>
        </div>
        <div className='flex justify-between text-xs'>
            <p>Larger Storage</p>
            <p>+$2/mo</p>
        </div>
      </div>

      <div className="total p-4 flex justify-between items-center">
        <p className='text-xs'>Total (per month)</p>
        <p>+$12/mon</p>
      </div>

      <div className='mt-32 flex justify-between'>
            <button onClick={handleBack} className=' bg-gray-100 hover:bg-blue-300 text-blue-500 text-xs font-bold py-2 px-4 rounded'>Go Back</button>
            <button onClick={handleConfirm} className=' bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded'>
            {openLoader && <CircularProgress className='mr-2' style={{width: "16px", height: "10px"}} color="secondary" />}
                Confirm</button>
            </div>

            </div>
      </div>}

      {/* {openThankyou && <div className='sm:hidden thankyou px-52 py-40 w-[100%]'>
        <div className='flex flex-col items-center'>
            <img src={thankImg} alt="" />
            <div className="text text-2xl">Thank you!</div>
            
        </div>
      </div>} */}
      </div>
      <div className="hidden sm:block info2 px-20 pt-14">
      {/* {openThankyou && <div className='thankyou px-52 py-40 w-[100%]'>
        <div className='flex flex-col items-center'>
            <img src={thankImg} alt="" />
            <div className="text text-2xl">Thank you!</div>
            
        </div>
      </div>} */}
      </div>

      {/* {
        openThankyou && <div className='flex flex-col justify-center items-center'>
            <div className='m-16  flex flex-col justify-center items-center'>
            <img src={thankImg} alt="" className='' />
            <div className="text text-2xl">Thank you!</div>
            <div className="smtext">Thanks for confirming your subscription we hope you have fun using our platform. If you ever need any support, please feel free to email us at support jakkanisagar19@gmail.com</div>
            </div>
            
        </div>
      } */}
    </div>
  )
}

export default Step4
