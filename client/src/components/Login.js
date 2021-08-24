import React, {useState, useContext} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context";

function Login(){

    const {isAuth, setIsAuth}=useContext(AuthContext)

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    let history=useHistory()

    const login = () => {
        const data={username:username, password:password}
        axios.post("http://localhost:3001/auth/login", data,{
            headers:{
                token:localStorage.getItem('x-auth-token')
            }
        })
            .then(response=>{
                if(response.data.error)
                    return alert(response.data.error)
                localStorage.setItem("x-auth-token", response.data)
                setIsAuth({username:response.data.user, role:response.data.role, status:true})
                history.push("/")
            })
    }

    return (
        <div className="register">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" onChange={event => {
                    setUsername(event.target.value)
                }}/>
                <label>Password</label>
                <input type="password" onChange={event => {
                    setPassword(event.target.value)
                }}/>
                <button onClick={login}>Login</button>
            </div>
        </div>

    )
}

export default Login