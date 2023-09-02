import React, { useState } from 'react'
import './Register.css'
import { saveToNgo, saveToVictim } from '../../api/localStorage'



export default function Register({who}) {

    const [user, setUser] = useState({
        name:"",
        email:"",
        desc:"",
    })


    function handleRegister(event) {
        event.preventDefault()
        if(who==="ngo")
        {
            saveToNgo(user)
       
        }else if(who==="victim")
        {
            saveToVictim(user)
        }
        
        alert("Registration Successfull")
    }

    function handleChange(event) {
        const userInfo = {
            ...user,
            [event.target.name]:event.target.value
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
                <input type="email" id='email' name='email' onChange={handleChange}/>

                {/* <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' onChange={handleChange}/> */}

                <div className="btn">
                    <button onClick={handleRegister}>Register</button>

                </div>
            </form>
           
        </div>
    )
}
