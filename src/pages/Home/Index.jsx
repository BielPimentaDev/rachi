import React from 'react'
import Header from '../../common/Header'
import AppAnnounce from './AppAnnounce'
import Contact from './Contact'
import HowWork from './HowWork'
import OurPlans from './OurPlans/Index'
import {TopSide} from './TopSide'

export default function Index() {
  return (
    <div>
        <Header/>
        <TopSide/>
        <HowWork/>
        <AppAnnounce/>
        <OurPlans/>
        <Contact/>
        <p className='text-center pb-8'>Rachi - Todos os direitos reservados.</p>
    </div>
  )
}
