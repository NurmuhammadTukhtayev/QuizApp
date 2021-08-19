import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Router>
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
                        <Nav.Link href="/username">My Page</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
