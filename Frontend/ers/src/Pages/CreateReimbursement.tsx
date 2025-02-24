import axios from "axios"
import "../css/createReimb.css"
import Nav from "../components/Nav"
import React, { useState } from "react"
import getUser from "../util/common"
import { useEffect } from "react"
import { useNavigate } from "react-router"
function CreateReimbursement(){
    const user = getUser()
    const navigate = useNavigate()
    useEffect(()=>{
        if(user == null){
            navigate("/")
        }
    }, [])
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState('')
    
    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };
    function checkFields(){
        if(text.length < 10){
            setMessage("Description must be at least 10 Characters")
        }else if(amount == ""){
            setMessage("Must include Reimbursement amount")
        }else{
            createReimb()
        }
    }
    const storeAmount = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setAmount(event.target.value)
    }
        async function createReimb(){
            
    try{

        await axios.post("http://localhost:8080/reimbursement", {description: text, amount: amount, userId: user.userId}, {withCredentials:true})
        navigate("/dashboard")

    } catch {
        alert("unsuccessful")
    }
}
    return(<div className="createRoot">
    <Nav/>
    {message != "" && <p className="message">{message}</p>}
    <div className="createR">
        <h2>Create Reimbursement</h2>
        <label htmlFor="amount">Reimbursement Amount</label><br></br>
        <input id="amount" name="amount" onChange={storeAmount} type="number"></input>
        <br></br>
        <label htmlFor="description">Reimbursement Description</label><br></br>
        <textarea minLength={10} required id="description" name="description" maxLength={255} rows={3} onChange={handleChange}></textarea>
        <br></br>

        <button onClick={checkFields}>Create</button>
        </div>
    </div>)
}
export default CreateReimbursement