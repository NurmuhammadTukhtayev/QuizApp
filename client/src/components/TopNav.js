import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Nav, NavDropdown, Navbar} from "react-bootstrap";
import {AuthContext} from "../context";

function TopNav(){
    const {isAuth, setIsAuth}=useContext(AuthContext)

    const logOut = () => {
        setIsAuth({...isAuth, status:false})
        localStorage.removeItem('x-auth-token')
    }

        return (
            <div>
                <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg" >
                    <Navbar.Brand>
                        <Link to="/" className="link-info">QUIZ</Link>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            {isAuth.status ?
                                <>
                                    <Nav.Link><Link to="/" className="navs">Home</Link></Nav.Link>
                                    <Nav.Link><Link to="/top" className="navs">Ranking</Link></Nav.Link>


                                    <NavDropdown title="Start test">
                                        <NavDropdown.Item href="start">10 questions</NavDropdown.Item>
                                        <NavDropdown.Item href="start">15 questions</NavDropdown.Item>
                                        <NavDropdown.Item href="start">20 questions</NavDropdown.Item>
                                        <NavDropdown.Item href="start">30 questions</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link><Link to="/t" className="navs">{isAuth.username}</Link></Nav.Link>

                                    <button className='logOut' onClick={logOut}>Log out</button>
                                </>
                                :
                                <>
                                    <Nav.Link href="/register">Sign Up</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default TopNav;