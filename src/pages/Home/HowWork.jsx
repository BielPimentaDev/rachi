import React from 'react'
import Title from '../../common/Title'
import security from '../../assets/imgs/security.png'
import conection from '../../assets/imgs/conection.png'
import smile from '../../assets/imgs/smile.png'

export default function HowWork() {
    const pageArray = 
        [
           { name: 'Crie conexões',
        text: 'Lorem ipsum dolor sit amet, consectetur ',
        img: conection},

           { name: '100% gratuito',
        text: 'Lorem ipsum dolor sit amet, consectetur ',
        img: security},
           { name: 'Compartilhamento',
        text: 'Lorem ipsum dolor sit amet, consectetur ',
        img: smile},
    ]
    
  return (
    <div className='flex flex-col justify-center items-center sm:gap-16 gap-8 my-16'>
        <Title text="Como funciona" />
        <ul className='flex sm:flex-row flex-col justify-around sm:w-[80%] h-[100%] gap-16 sm:gap-0'>
            {
                pageArray.map(page=>{
                    return (
                    <li key={page.name} className='flex  flex-col items-center gap-2 '>
                        <img src={page.img}/>
                        <span className='font-sora font-semibold'>{page.name}</span>
                        <p className='text-gray-0 text-sm w-[70%] text-center'>{page.text}</p>
                    </li>)
                }
                )
            }
        </ul>
    </div>
  )
}
