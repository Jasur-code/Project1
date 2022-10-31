import React from 'react'
import HeaderMain from './HeaderMain'
import HeaderMenu from './headerMenu'

export default function Header() {
  return (
    <div style={{backgroundColor:"#161927", paddingBottom:"60px"}}>
        <HeaderMenu/>
        <HeaderMain/>
    </div>
  )
}
