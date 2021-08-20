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
                {user}
            </div>
        );
}

export default Top;