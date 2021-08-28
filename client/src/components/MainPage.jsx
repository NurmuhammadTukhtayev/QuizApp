import React, {useEffect, useState} from 'react';
import TopNav from "./TopNav";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Top from "./Top";
import Test from "./Test";
import Sign from "./Sign";
import Login from "./Login";
import Footer from "./Footer";
import axios from "axios";
import {AuthContext} from "../context";
import CustomComp from "./CustomComp";

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
                    setIsAuth({
                        username: response.data.name,
                        role:response.data.role,
                        status: true
                    })
            })
            .catch(error=>{
                console.log(error)
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
                            <Route path="/username" exact component={CustomComp}/>
                            {/*<Route path="*" exact component={NotFound}/>*/}
                        </> :
                        <>
                            <Route path="/register" exact component={Sign}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="*" exact>
                                <Redirect to="register"/>
                            </Route>
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