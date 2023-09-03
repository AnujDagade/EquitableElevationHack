import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Content from './components/Content/Content'


function App() {
  

  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)) {


      alert("This webapp is not designed to work on Smartphones.Please visit Using a Desktop/Laptop")
  }
  return (
    <>

      <Content />

    </>
  )
}

export default App
