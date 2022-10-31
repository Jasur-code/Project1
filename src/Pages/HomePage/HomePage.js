import { CssBaseline } from '@mui/material'
import React from 'react'
import HomeWrapper from '.'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/Hader'
import MainSec from '../../Components/Main/Main'
import Sections from '../../Components/Sections/sections'

export default function HomePage() {
  return (
    <HomeWrapper>
    <CssBaseline/>
          <Header/>
          <MainSec/>
          <Sections/>
          <Footer/>
    </HomeWrapper>
  )
}
