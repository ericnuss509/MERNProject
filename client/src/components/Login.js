import { navigate } from '@reach/router';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [user, setUser] = useState({})

const submitLogin = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:8000/api/user/${user.username}`)
        .then(navigate(`/user/${user.username}`))
}

const formChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
}

const newUser = (e) => {
    e.preventDefault() 
    axios.post('http://localhost:8000/api/user', user)
        // .then(response => setUser(response.data.results))
        .then(navigate(`/user/${user.username}`))
}

    return (
        <div>
            <h2>Returning users login</h2>
            <form onSubmit={submitLogin}>
                <div>
                    {/* password and username must match */}
                    <label htmlFor='username'>User Name</label>
                    <input type='text' name='username' onChange={formChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' onChange={formChange} />
                    <button type="button" class="btn btn-primary background-color:lavender;">Login</button>
                </div>
            </form>
            <br/>
            <h2>New user registration</h2>
            <form onSubmit={ newUser }>
                <div>
                    <label htmlFor='username'>User Name</label>
                    <input type='text' name='username' onChange={formChange} />
                </div>
                <div>
                    <label htmlFor='email'>User Email</label>
                    <input type='text' name='email' onChange={formChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>     
                    <input type='text' name='password' onChange={formChange} />
                    <button type="button" class="btn btn-primary " style={{backgroundColor:"lightcyan" , color: "black" , border: "1px solid lightcyan" }}>Register</button>
                </div>
            </form>
        </div>
    )
    //updating branch 
}

export default Login
