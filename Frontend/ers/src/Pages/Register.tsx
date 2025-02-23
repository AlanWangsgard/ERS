import { useState } from "react"
import axios from "axios"

function Register(){
    
    const[registerInfo, setRegisterInfo] = useState({
        firstName:"",
        lastName:"",
        username:"",
        password:""
    }) 


    const storeValues = (event:React.ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name 
        const value = event.target.value 

        setRegisterInfo((registerInfo) => ({...registerInfo, [name]:value}))

    }
    async function register(){
        try{

            await axios.post("http://localhost:8080/auth/register", registerInfo, {withCredentials:true})

            alert("account created")

        } catch {
            alert("account not created")
        }
    }


    return <>
    <div className="registerBackground">
    <div className="registerDiv">
        <input type="text" name="firstName" placeholder="First Name" onChange={storeValues}></input>
        <input type="text" name="lastName" placeholder="Last Name" onChange={storeValues}></input>
        <input type="text" name="username" placeholder="Username" onChange={storeValues}></input>
        <input type="password" name="password" placeholder="Password" onChange={storeValues}></input>
        <input className="loginDivButton" type="button" value={"Register"} onClick={register}></input>
    </div>
    </div>
    </>
}

export default Register