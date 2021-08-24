import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import axios from "axios";
import MainPage from "./components/MainPage";
import Admin from "./components/Admin/Admin";

function App() {
    const [role, setRole]=useState("")

    useEffect(()=>{
        axios.get("http://localhost:3001/users/",
            {
                headers:{
                    token:localStorage.getItem('x-auth-token')
                }
            })
            .then(response=>{
                if(response.data.error){
                    setRole("")
                    console.log(response.data.error)
                }
                else {
                    if(response.data.role==="admin")
                        setRole("admin")
                    else
                        setRole("user")
                }
            })
    },[])


  return (
          <div className="App">
              {role === "admin" ?
                  <Admin/>
                  :
                  <MainPage/>
              }
          </div>
  );
}

export default App;
