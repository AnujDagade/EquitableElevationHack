import React, { useState } from 'react'
import './Register.css'
import { saveToNgo, saveToVictim } from '../../api/localStorage.js'



export default function Register({ who }) {
    //initDB()

    const [user, setUser] = useState({
        name: "",
        email: "",
        desc: "",
    })


    async function handleRegister(event) {
        event.preventDefault()
        if (who === "ngo") {
            //saveToNgo(user)
            const res = await fetch("https://8888-anujdagade-equitableele-s09jf8798fp.ws-us105.gitpod.io/.netlify/functions/savengo/savengo", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const result = await res.json()
            console.log(result.info)

        } else if (who === "victim") {
            //saveToVictim(user)
            const res = await fetch("https://8888-anujdagade-equitableele-s09jf8798fp.ws-us105.gitpod.io/.netlify/functions/savevictim/savevictim",
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            const result = await res.json()
            console.log(result.info);
        }

        alert("Registration Successfull")
    }

    function handleChange(event) {
        const userInfo = {
            ...user,
            [event.target.name]: event.target.value
        }
        setUser(userInfo)
    }



    return (
        <div className='form'>
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id='name' onChange={handleChange} />

                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" cols="30" rows="10" onChange={handleChange}></textarea>

                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' onChange={handleChange} />

                {/* <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' onChange={handleChange}/> */}

                <div className="btn">
                    <button onClick={handleRegister}>Register</button>

                </div>
            </form>

        </div>
    )
}
