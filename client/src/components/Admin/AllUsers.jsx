import React, {useEffect, useState} from 'react';
import axios from "axios";

const AllUsers = () => {
    const [users, setUsers]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/users/all", {
            headers:{
                token:localStorage.getItem('x-auth-token')
            }
        })
            .then(response=>{
                setUsers(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1 style={{textAlign:"center"}}>All users</h1>
            <hr/>
            <table>
                <thead>
                <tr>
                    <th className="rank">№</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Permission</th>
                    <th>Register Date</th>
                </tr>
                </thead>
                <tbody>
                {users.map((name, key)=>{
                    return <tr key={key}>
                        <td className="rank">{key+1}</td>
                        <td className="username">{name.username}</td>
                        <td className="ball">{name.email}</td>
                        <td className="percent">{name.password}</td>
                        <td className="percent">{name.permission}</td>
                        <td className="percent">{name.register_date}</td>
                    </tr>
                })}
                </tbody>

            </table>
        </div>
    );
};

export default AllUsers;