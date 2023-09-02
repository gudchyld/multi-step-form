import React from 'react';
import thankYou from '../assets/images/icon-thank-you.svg';


function Final() {
  return (
    <>
        <div className="w-full md:w-full bg-white rounded-xl px-6 py-14">
            <div className='flex flex-col items-center gap-4 py-8'>
                <img className='w-14 h-14' src={thankYou} alt="Thank You" />
                <h3 className='font-bold text-2xl pt-2'>Thank You!</h3>
                <p className='text-gray-400 text-center px-2'>Thanks for confirming your subscription! We hope you have fun using our 
                    platform. If you ever need support, please feel free to email us at 
                    support@loremgaming.com.
                </p>
            </div>
        </div>
    </>
  )
}

export default Final