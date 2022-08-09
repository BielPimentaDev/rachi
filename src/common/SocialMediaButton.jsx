import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'

export default function SocialMediaButton({type}) {
  return (
    <button className='bg-gray-200 text-white-0 font-semibold p-2 rounded-lg flex flex-col lg:px-4 lg:py-2 '>
        <div className='flex gap-2 content-center items-center lg:w-[165px] lg:h-[50px] w-[150px] h-[50px]'>

          {
            type==="google" ? 
           <>
            <AiFillApple size={48} />
            <div className='flex flex-col text-start'>
                <span className='text-xs lg:text-sm'>GET IT ON</span>
                <span className='lg:text-xl'>App Store</span>
            </div>
           </>
           :
           <>
           <FaGooglePlay size={38} />
           <div className='flex flex-col text-start'>
               <span className='text-xs'>GET IT ON</span>
               <span className='lg:text-xl'>Google Play</span>
           </div>
          </>
            
            }

        </div>
        
        </button>
  )
}
