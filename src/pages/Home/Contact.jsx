import React from 'react'
import Button from '../../common/Button'

export default function Contact() {
  return (
    <div className='text-white-0 text-center mt-32 mb-16 h-[380px] bg-[url("/src/assets/imgs/contact.png")] flex flex-col justify-center gap-24  items-center m:p-16 p-8'>
        <div>
            <h4 className='font-sora font-semibold text-4xl'>Contato</h4>
            <p className='text-gray-light sm:w-[50%] mx-auto text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum aspernatur aut quaerat similique sapiente ipsum temporibus, alias quis praesentium, illo cumque t.</p>
            
        </div>

        <div className='flex sm:flex-row flex-col sm:gap-0 gap-16 '>
            <input placeholder='Seu melhor email ' className='bg-transparent border-b-white-0 border-b-2 placeholder:text-white-0 sm:mr-8'/> <Button title="Enviar"/></div>
        </div>

  )
}
