import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import Card from './Card'
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
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../Static/About'
import Contact from '../Static/Contact'


function VicCards(props) {
 
  
  // const [userCards , setUserCards] = useState([{_id:1,name:"placeholder",email:null,desc:null}])
  const emptyMsg = `Results are empty please Register as ${props.user==="victim"?"Surviver":"NGO"}`

    // useEffect(
    //   () =>{
        
    //     fetch("https://8888-anujdagade-equitableele-s09jf8798fp.ws-us105.gitpod.io/.netlify/functions/getNgo/getNgo", {
    //         method: "GET",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     }).then(res => res.json()).then(data => setUserCards(data))
       
    //   }
    // ,[props.user])

    // useEffect(
    //   () =>{
    //     console.log("In effect")
    //     fetch("https://8888-anujdagade-equitableele-s09jf8798fp.ws-us105.gitpod.io/.netlify/functions/getNgo/getNgo", {
    //         method: "GET",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     }).then(res => res.json()).then(data => setTimeout(()=> {setUserCards(data)},500))
        
    //   }
    // ,[])
    const cards = props.userCards.map(
      (info) => (
        <Card 
          name={info.name}
          desc={info.desc}
          contact={info.email}
          key = {info._id}
        />
    ))

  return (
    <div className="cards" >
      {cards.length==0?<div>{emptyMsg}</div>:cards}
    </div >
  )
}



export default function Content() {
  const [userCardsNgo , setUserCardsNgo] = useState([{_id:1,name:"placeholder",email:null,desc:null}])
  const [userCardsVictims, setUserCardsVictims] =useState([{_id:2}])

  useEffect(
    () =>{
      console.log("In effect")
      fetch("https://8888-anujdagade-equitableele-s09jf8798fp.ws-us105.gitpod.io/.netlify/functions/getVictim/getVictim", {
          method: "GET",
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then(res => res.json()).then(data => setTimeout(()=> {setUserCardsVictims(data)},500))

      fetch("https://8888-anujdagade-equitableele-s09jf8798fp.ws-us105.gitpod.io/.netlify/functions/getNgo/getNgo", {
          method: "GET",
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then(res => res.json()).then(data => setTimeout(()=> {setUserCardsNgo(data)},500))
      
    }
  ,[])



  return (
    <div className='content'>
    
      <Router>
        <Navbar />
        <TopBar />
        <Routes>
          <Route  path='/' element={<Hero />} />
          <Route  path='/victims' element={<VicCards user="victim" userCards={userCardsVictims}/>} />
          <Route  path='/ngo' element={<VicCards user="ngo" userCards={userCardsNgo}/>} />
          <Route  path='/ngo_register' element={<Register who="ngo" />} />
          <Route  path='/victim_register' element={<Register who="victim" />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </div>
  )
}
