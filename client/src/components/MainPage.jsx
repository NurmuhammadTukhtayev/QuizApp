import React, {useEffect, useState} from 'react';
import TopNav from "./TopNav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Top from "./Top";
import Test from "./Test";
import Sign from "./Sign";
import Login from "./Login";
import Footer from "./Footer";
import axios from "axios";
import {AuthContext} from "../context";

const MainPage = () => {

    const [isAuth, setIsAuth]=useState({
        username:"",
        role:"",
        status:false
    })

    useEffect(()=>{
        axios.get("http://localhost:3001/users/",
            {
                headers:{
                    token:localStorage.getItem('x-auth-token')
                }
            })
            .then(response=>{
                if(response.data.error){
                    setIsAuth({...isAuth, status: false})
                    console.log(response.data.error)
                }
                else {

                    setIsAuth({
                        username: response.data.name,
                        role:response.data.role,
                        status: true
                    })
                    console.log(response.data.role)
                }
            })
    },[])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <div>
            <Router>
                <TopNav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    {isAuth.status ?
                        <>
                            <Route path="/top" exact component={Top}/>
                            <Route path="/start" exact component={Test}/>
                        </> :
                        <>
                            <Route path="/register" exact component={Sign}/>
                            <Route path="/login" exact component={Login}/>
                        </>
                    }
                </Switch>
                <Footer/>
            </Router>
        </div>
        </AuthContext.Provider>
    );
};

export default MainPage;