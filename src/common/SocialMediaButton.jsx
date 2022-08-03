import React from 'react'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'

export default function SocialMediaButton({type}) {
  return (
    <button className='bg-gray-200 text-white-0 font-semibold p-2 rounded-lg flex flex-col px-4 py-2 '>
        <div className='flex gap-2 content-center items-center'>

          {
            type==="google" ? 
           <>
            <AiFillApple size={48} />
            <div className='flex flex-col text-start'>
                <span className='text-sm'>GET IT ON</span>
                <span className='text-xl'>App Store</span>
            </div>
           </>
           :
           <>
           <FaGooglePlay size={38} />
           <div className='flex flex-col text-start'>
               <span className='text-xs'>GET IT ON</span>
               <span className='text-xl'>Google Play</span>
           </div>
          </>
            
            }

        </div>
        
        </button>
  )
}
