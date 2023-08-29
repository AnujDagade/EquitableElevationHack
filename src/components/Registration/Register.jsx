import React from 'react'
import './Register.css'

function handleRegister(event) {
    event.preventDefault()
    console.log("Regiterd")
}


export default function Register() {
    return (
        <div className='form'>
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id='name' />

                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" cols="30" rows="10"></textarea>

                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' />

                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' />

                <div className="btn">
                    <button onClick={handleRegister}>Register</button>

                </div>
            </form>
        </div>
    )
}
