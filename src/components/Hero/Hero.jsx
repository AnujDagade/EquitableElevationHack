import React from 'react'
import './Hero.css'



export default function Hero() {
    return (
        <div className='Hero'>
            <div className='info' >
                <div className='info-text'>
                    <div className='hero-title'>
                        <h2>Social justice</h2>
                    </div>
                    <p>
                        This platform helps Domestic Abuse/CSA victims and NGOs to connect with each other.
                        If you register as a victim, NGOs can contact you to help you or you can contact NGOs that are registered with us.
                    </p>

                </div>
                {/* <div className="info-picture">
                    <button onClick={()=> location.href = "/"}>Click to Start</button>
                </div> */}
            </div>
        </div>
    )
}
