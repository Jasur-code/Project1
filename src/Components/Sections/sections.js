import { Box } from '@mui/material'
import React from 'react'
import Index from '.'
import Blog from './Blog'
import Clients from './Clients'
import Contact from './Contact'

export default function Sections() {
  return (
   <Box>
      <Clients/>
      <Blog/>
      <Index/>
      <Contact/>
   </Box>
  )
}
