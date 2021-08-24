import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios'

function Top() {
    const [user, setUser]=useState([]);


    // console.log(localStorage.getItem("x-auth-token"))
    useEffect(()=>{
        axios.get("http://localhost:3001/users/top", {
            headers:{
                token:localStorage.getItem("x-auth-token")
            }
        }).then(response=>{
            setUser(response.data)
        })

    }, [])


    return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="rank">Rank</th>
                            <th>Username</th>
                            <th>Result</th>
                            <th>Percent</th>
                        </tr>
                    </thead>
                    <tbody>
                    {user.map((name, key)=>{
                        return <tr>
                                <td className="rank">{key+1}</td>
                                <td className="username">{name.username}</td>
                                <td className="ball">{name.ball}</td>
                                <td className="percent">{name.percent}%</td>
                            </tr>
                    })}
                    </tbody>

                </table>
            </div>
        );
}

export default Top;