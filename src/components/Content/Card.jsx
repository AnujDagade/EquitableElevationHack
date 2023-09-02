import React, { useEffect } from 'react'
import './Card.css'

export default function Card(props) {

   

    return (
        <div className='card'>
            <div className='name'>
                <h4>Name: {props.name}</h4>
            </div>
            <div>
                <p>
                    <div><h4>Description:</h4></div>{props.desc}
                </p>
            </div>
            <div>
                <h4>Contact:</h4>{props.contact}
            </div>
        </div>
    )
}
