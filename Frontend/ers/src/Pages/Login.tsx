// import background from  "../assets/road.jpg"
import "../App.css"
import axios from "axios";
import { useState } from "react"
import { Link } from "react-router";
import { useNavigate } from "react-router"
import { store } from "../GlobalData/store"
function Login(){

    const navigate = useNavigate()

    const[loginCreds, setLoginCreds] = useState({
        username:"",
        password:""
    }) 


    const storeValues = (event:React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name 
        const value = event.target.value 

        setLoginCreds((loginCreds) => ({...loginCreds, [name]:value}))

    }

    async function login(){
        
        try{

            const response = await axios.post("http://localhost:8080/auth/login", loginCreds, {withCredentials:true})

            store.loggedInUser = response.data

            sessionStorage.setItem('user', JSON.stringify(response.data))

            navigate("/dashboard")

        } catch {
            alert("Login unsuccessful")
        }
    }

    return <>
    <div className="loginBackground">
        <div className="loginDiv">
            <h2>Login</h2>
            <input placeholder="Username" name="username" type="text" onChange={storeValues}></input>
            <br></br>
            <input placeholder="Password" name="password" type="password" onChange={storeValues}></input>
            <br></br>
            <input className="loginDivButton" type="button" value={"Log In"} onClick={login}></input>
            {/* <input className="loginDivButton" type="button" value={"Register"}><Link to="./"></Link></input> */}
            <Link className="loginDivButton" to="/register">Register</Link>
        </div>
        {/* <img src={background}></img> */}
    </div>
    </>
}

export default Login