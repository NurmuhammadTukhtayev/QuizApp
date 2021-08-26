import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import axios from "axios";
import MainPage from "./components/MainPage";
import Admin from "./components/Admin/Admin";
import {BrowserRouter} from "react-router-dom";

function App() {
    const [role, setRole]=useState("")
    const [name, setName]=useState("")

    useEffect(()=>{
        axios.get("http://localhost:3001/users/",
            {
                headers:{
                    token:localStorage.getItem('x-auth-token')
                }
            })
            .then(response=>{
                    if(response.data.role==="admin") {
                        setRole("admin")
                        setName(response.data.name)
                    }
                    else
                        setRole("user")
            })
            .catch(error=>{
                console.log(error)
            })
    },[])


  return (
      <BrowserRouter>
          <div className="App">
              {role === "admin" ?
                  <Admin name={name} isAuth={true}/>
                  :
                  <MainPage/>
              }
          </div>
      </BrowserRouter>

  );
}

export default App;
