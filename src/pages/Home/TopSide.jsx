import React from 'react'
import working from '../../assets/imgs/working-1.png'
import Button from '../../common/Button'

export function TopSide() {
  return (
    <div className='flex lg:flex-row flex-col justify-around items-center bg-white-200'>
        <div>
            <h2 className='font-sora font-semibold lg:text-4xl text-3xl my-6'>
                Rachi, <br/>
                tudo que você <br/> precisa em um só lugar.
            </h2>
            <Button title="Cadastrar-se"/>
        </div>
        <img src={working}/>

    </div>
  )
}
