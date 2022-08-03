import React from 'react'
import Title from '../../common/Title'
import workin2 from '../../assets/imgs/working-2.png'
import SocialMediaButton from '../../common/SocialMediaButton'

export default function AppAnnounce() {
  return (
    <div className='bg-white-200 lg:p-16 py-16 px-4 flex justify-around text-center'>
      <div>
        <Title text="Baixe nosso app para desfrutar mais!"/>
        <p className='text-gray-0 w-[60%] mt-8 lg:text-start lg:mx-0 mx-auto text-center'>Lorem ipsum dolor, sit amet consectetur . Distinctio ut autem obcaecati sapiente excepturi omnis dicta, suscipit magni quibusdam doloribus consequatur accusantium doloremque maxime? </p>
        <div className='flex gap-8 p-2 my-8 justify-center'>
          <SocialMediaButton type="apple"/>
          <SocialMediaButton type="google"/>
        </div>
      </div>
      <img src={workin2} className="hidden lg:block"/>


    </div>
  )
}
