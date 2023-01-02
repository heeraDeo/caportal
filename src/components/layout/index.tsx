import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}:any) {
  return (
    <div>
        {/* <Header/> */}
        {children}
        <Footer/>
        Bv:29.10.22
    </div>
  )
}
