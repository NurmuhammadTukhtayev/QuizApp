import React from 'react';
import {Link} from "react-router-dom";
import {Nav, NavDropdown, Navbar} from "react-bootstrap";

function TopNav(){
        return (
            <div>
                <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="lg" >
                    <Navbar.Brand>
                        <Link to="/" className="link-info">QUIZ</Link>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/top">Top best results</Nav.Link>
                            <NavDropdown title="Start test">
                                <NavDropdown.Item href="start/10">10 questions</NavDropdown.Item>
                                <NavDropdown.Item href="start/10">15 questions</NavDropdown.Item>
                                <NavDropdown.Item href="start/10">20 questions</NavDropdown.Item>
                                <NavDropdown.Item href="start/10">30 questions</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/register">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default TopNav;