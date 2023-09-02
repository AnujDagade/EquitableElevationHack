import React, { useEffect } from 'react'
import './Card.css'

export default function Card(props) {

   

    return (
        <div className='card'>
            <div className='name'>
                <h4>{props.name}</h4>
            </div>
            <div>
                <p>
                    {props.desc}
                </p>
            </div>
            <div>
                {props.contact}
            </div>
        </div>
    )
}
