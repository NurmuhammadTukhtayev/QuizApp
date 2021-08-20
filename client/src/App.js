import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import Sign from "./components/Sign";
import Login from "./components/Login";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
        <Router>
            <TopNav/>
            <Switch>
                <Route path="/register" exact component={Sign}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Home}/>
                <Route path="/top" exact component={Top}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
