import React from 'react'
import Button from '../../../common/Button'

export default function Plan({strong, title, price}) {
  return (
    <div className={`p-6 sm:w-[370px] w-[350px] h-[470px]  text-center flex flex-col justify-around rounded-xl  ${ strong ? 'bg-gray-200 text-white-0' : 'bg-white-200'}`}>
        <div className='flex flex-col gap-6 '>
            <h3 className='font-sora font-semibold text-2xl '>{title}</h3>
            {strong ?  <div className='bg-blue text-white-0  text-sm rounded-3xl p-1 w-[40%] mx-auto tracking-widest flex justify-center'>
            PREFERIDO
                </div> : <div/> }
        <div className='font-semibold flex justify-center gap-1'>
            <span className=''>R$</span>
            <span className={`${strong ? 'text-5xl':'text-4xl'} `}>{price}</span>
            <span className='self-end'>/mês</span>

        </div>
        </div>
        <p className={`${ strong ? 'text-gray-light' : 'text-gray-0'} `}>Lorem ipsum ate maxime praesentium sint architecto a  nesciunt, modi eos, molestias accusamus similique ducimus! Suscipit, dolore.</p>
        <button className='bg-blue text-white-0 px-6 p-2 rounded-3xl w-[60%] mx-auto'>
        Assinar
    </button>
    </div>
  )
}
