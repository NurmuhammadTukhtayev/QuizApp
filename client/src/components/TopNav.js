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
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="top">Ranking</Nav.Link>

                                    <NavDropdown title="Start test">
                                        <NavDropdown.Item as={Link} to="start">10 questions</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="start">15 questions</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="start">20 questions</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="start">30 questions</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="username">{isAuth.username}</Nav.Link>

                                    <button className='logOut' onClick={logOut}>Log out</button>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to="register">Sign Up</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default TopNav;