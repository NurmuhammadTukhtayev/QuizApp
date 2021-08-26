import React, {useEffect, useState} from 'react';
import axios from "axios";

const SelectCategory = ({create}) => {
    const [options, setOptions]=useState([])
    const [cat, setCat]=useState("")

    useEffect(()=>{
        axios.get('http://localhost:3001/quiz/categories', {
            headers:{
                token:localStorage.getItem('x-auth-token')
            }
        })
            .then(response=>{
                console.log(response.data)
                setOptions(response.data)
                console.log(response.data[0].category)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    //return category
    create(cat)

    return (
        <div className="select">
            <h2 htmlFor="chose" >Choose the category:</h2>
            <input value={cat} list="data" id="chose" name="chose" placeholder="choose the category" onChange={event => setCat(event.target.value)}/>
            <datalist id="data">
                {options.map((value => {
                    return <option value={value.category} />
                }))}
            </datalist>
        </div>
    );
};

export default SelectCategory;