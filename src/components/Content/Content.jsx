import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import Card from './Card'
import Data from '../../../Data'
import './Content.css'
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from '../Registration/Register'
import { getInfo } from '../../api/localStorage'
import { nanoid } from 'nanoid'



function VicCards(props) {

  const [userCards , setUserCards] = useState(getInfo(Object.keys(localStorage),props.user))

  const emptyMsg = `Results are empty please Register as ${props.user==="victim"?"Surviver":"NGO"}`

    useEffect(
      () => {
        setUserCards(getInfo(Object.keys(localStorage),props.user))
      }
    ,[props.user])

      
    const cards = userCards.map(
      (info) => (
        <Card 
          name={info.name}
          desc={info.desc}
          contact={info.email}
          key = {nanoid()}
        />
    ))

  return (
    <div className="cards" >
      {cards.length==0?<div>{emptyMsg}</div>:cards}
    </div >
  )
}



export default function Content() {


  return (
    <div className='content'>
    
      <Router>
        <TopBar />
        <Routes>
          <Route  path='/victims' element={<VicCards user="victim" />} />
          <Route  path='/ngo' element={<VicCards user="ngo" />} />
          <Route  path='/ngo_register' element={<Register who="ngo" />} />
          <Route  path='/victim_register' element={<Register who="victim" />} />
        </Routes>
      </Router>

    </div>
  )
}
