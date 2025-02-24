import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import Nav from "../components/Nav"

function Register(){
    const[message,setMsg] = useState("")
    const[registerInfo, setRegisterInfo] = useState({
        firstName:"",
        lastName:"",
        username:"",
        password:""
    }) 

    const navigate = useNavigate()
    const storeValues = (event:React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name 
        const value = event.target.value 

        setRegisterInfo((registerInfo) => ({...registerInfo, [name]:value}))

    }
    function checkFields(){
        if(registerInfo.firstName == ""){
            setMsg("Must Provide First Name")
        }else if(registerInfo.lastName == ""){
            setMsg("Must provide Last Name")
        }else if(registerInfo.password == ""){
            setMsg("Must provide Password")
        }else if(registerInfo.username == ""){
            setMsg("Must provide Password")
        }else{
            register()
        }
    }
    async function register(){
        try{

            const response = await axios.post("http://localhost:8080/auth/register", registerInfo, {withCredentials:true})
            if(response.data.type == "error"){
            setMsg(response.data.message)
            }else if (response.data.type == "ok"){
                navigate("/")
            }

        } catch (e){
            alert("account not created")
        }
    }


    return <>
    <Nav/>
    <div className="registerBackground">
    {message != "" && <p className="message">{message}</p>}
    <div className="registerDiv">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" name="firstName" placeholder="First Name" onChange={storeValues}></input>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName"type="text" name="lastName" placeholder="Last Name" onChange={storeValues}></input>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" placeholder="Username" onChange={storeValues}></input>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" placeholder="Password" onChange={storeValues}></input>
        <input className="loginDivButton" type="button" value={"Register"} onClick={checkFields}></input>
    </div>
    </div>
    </>
}

export default Register