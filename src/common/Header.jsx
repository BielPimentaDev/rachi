import React from 'react'
import logo from '../assets/imgs/logoImg.png'
import menu_hamburguer from '../assets/imgs/menu hamburguer.png'

export default function Header() {
  return (
    <header className='bg-white-0 flex sm:justify-around justify-between p-4'>
        <div className='flex gap-4 content-center items-center'>
            <img src={logo} className='w-4 h-4'/>
            <h1 className='font-sora font-semibold text-xl '>Rachi</h1>
        </div>
        <nav className='hidden sm:block'>
            <ul className=' flex gap-16'>
                <li>Funcionalidades</li>
                <li>App</li>
                <li>Planos</li>
                
                <li>Contato</li>
            </ul>
        </nav>
        <button className='block sm:hidden'>
        <img src={menu_hamburguer} className='w-4 h-4'/>
        </button>
    </header>
  )
}
