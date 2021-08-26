import React, {useState} from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import AddCategory from "./AddCategory";
import AddQuestion from "./AddQuestion";
import AllUsers from "./AllUsers";
import InfoCategory from "./InfoCategory";

const Admin = (props) => {

    const [isTrue, setIsTrue]=useState(props.isAuth)

    const logOut = () => {
        localStorage.removeItem('x-auth-token')
        setIsTrue( false)
    }

    return isTrue ? <>
        <BrowserRouter>
            <div className="admin">
                <div className="sidebar left">
                    <div className="header">
                        <h1 style={{textAlign:"center"}}>{props.name}</h1>
                        <hr/>
                    </div>
                    <div>
                        <Link to="/category" className="page-link"><h2>Add Category</h2></Link>
                        <Link to="/add" className="page-link"><h2>Add Question</h2></Link>
                        <Link to="/users" className="page-link"><h2>All users</h2></Link>
                        <button className="accordion-button" onClick={logOut}>Log out</button>
                    </div>
                </div>
                <div className="top right">
                    <Switch>
                        <Route path="/category" exact component={AddCategory}/>
                        <Route path="/add" exact component={AddQuestion}/>
                        <Route path="/users" exact component={AllUsers}/>
                        <Route path="/info" exact component={InfoCategory}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>

        </>
        :
        <>
            <h1 className="text-danger">Refresh the page</h1>
        </>




};

export default Admin;