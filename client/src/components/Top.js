import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Top() {
    const [user, setUser]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/users/top").then(response=>{
            setUser(response.data)
            console.log(response.data)
        })

    }, [])

    return (
            <div>
                <table>
                    <tr>
                        <th className="rank">Rank</th>
                        <th>Username</th>
                        <th>Result</th>
                        <th>Percent</th>
                    </tr>
                    <tr>
                        <td className="rank">1</td>
                        <td>Nur</td>
                        <td>3</td>
                        <td>100%</td>
                    </tr>
                </table>
            </div>
        );
}

export default Top;