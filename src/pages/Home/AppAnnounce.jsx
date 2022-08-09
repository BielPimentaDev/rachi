import React from 'react'
import Title from '../../common/Title'
import workin2 from '../../assets/imgs/working-2.png'
import SocialMediaButton from '../../common/SocialMediaButton'

export default function AppAnnounce() {
  return (
    <div className='bg-white-200 flex lg:p-8  justify-center lg:px-32 px-16 '>
      <div className='py-16'>
      <h2 className='font-sora font-semibold text-3xl lg:text-start text-center '>Baixe nosso app para desfrutar mais!</h2>        
        <p className='text-gray-0 lg:w-[60%] mt-8 lg:text-start text-center lg:mx-0  mx-auto'>Lorem ipsum dolor, sit amet consectetur . Distinctio ut autem obcaecati sapiente excepturi omnis dicta, suscipit magni quibusdam doloribus consequatur accusantium doloremque maxime? </p>
        <div className='flex lg:gap-8 gap-2 lg:p-2 my-8'>
          <SocialMediaButton type="apple"/>
          <SocialMediaButton type="google"/>
        </div>
      </div>

      <img src={workin2} className="hidden lg:block "/>
    </div>
  )
}
