import React from 'react'
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




function VicCards() {
  const cards = Data.map(
    (card) => (<Card name={card.name}
      desc={card.desc}
      contact={card.contact} />)
  )


  return (
    <div className="cards" >
      {cards}
    </div >
  )
}



export default function Content() {


  return (
    <div className='content'>

      <Router>
        <TopBar />
        <Routes>
          <Route exact path='/victims' element={<VicCards />} />
          <Route exact path='/ngo_register' element={<Register />} />
          <Route exact path='/victim_register' element={<Register />} />
        </Routes>
      </Router>

    </div>
  )
}
