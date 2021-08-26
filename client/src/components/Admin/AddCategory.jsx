import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const AddCategory = () => {
    const [category, setCategory]=useState("")

    const createCategory = () => {
        axios.post("http://localhost:3001/quiz/createCategory", {category:category}, {
            headers:{
                token:localStorage.getItem('x-auth-token')
            }
        })
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
        setCategory("")
    }

    //get all category
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/quiz/categories", {
            headers:{
                token:localStorage.getItem('x-auth-token')
            }
        })
            .then(response=>{
                setCategories(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    },[])



    return (
        <div>
            <div className="category">
                <label>
                    Crate a category
                </label>
                <input type="text" placeholder="category..." value={category} onChange={event => setCategory(event.target.value)} />
                <button onClick={createCategory}>Add</button>
            </div>
            <hr/>
            <div>
                <h1 style={{textAlign:"center"}}>Categories</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Category</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categories.map((cat, key)=>{
                        return <tr key={key}>
                            <td className="rank">{key+1}</td>
                            <td><Link className="myLink" to="info">{cat.category}</Link></td>
                            <td>{cat.count}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddCategory;