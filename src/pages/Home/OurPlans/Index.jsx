import React from 'react'
import Button from '../../../common/Button'
import Title from '../../../common/Title'
import Plan from './Plan'

export default function Index() {
  return (
    <div>
      <div className='lg:w-[50%] w-[80%] mx-auto text-center my-16'>
        <h1 className='font-sora font-semibold text-3xl mb-4 '>Nossos Planos</h1>
        <p className='text-gray-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut atque  temporibus ab, commodi a delectus veritatis odio iure eveniet qui .</p>
      </div>

  <div className='flex lg:justify-around lg:flex-row flex-col justify-center items-center gap-8'>
    <Plan title="Bronze" price="28"/>
    <Plan strong={true} title="Prata" price="57"/>
    <Plan title="Ouro" price="94"/>
  </div>
    </div>
    
  )
}
