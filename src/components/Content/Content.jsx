import React from 'react'
import TopBar from './TopBar'
import Card from './Card'
import Data from '../../../Data'
import './Content.css'

const cards = Data.map(
  (card) => (<Card name={card.name}
    desc={card.desc}
    contact={card.contact} />)
)




export default function Content() {


  return (
    <div className='content'>
      <TopBar />
      <div className="cards">
        {cards}
      </div>
    </div>
  )
}
