import axios from "axios"
import "../css/createReimb.css"
import Nav from "../components/Nav"
import React, { useState } from "react"
import getUser from "../util/common"
function CreateReimbursement(){
    const user = getUser()
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState("");
    
    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };
    const storeAmount = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setAmount(event.target.value)
    }
        async function createReimb(){
            
    try{

        const response = await axios.post("http://localhost:8080/reimbursement", {description: text, amount: amount, userId: user.userId}, {withCredentials:true})
        console.log(response.data)

    } catch {
        alert("unsuccessful")
    }
}
    return(<div className="createRoot">
    <Nav/>
    <div className="createR">
        <h2>Create Reimbursement</h2>
        <label htmlFor="amount">Reimbursement Amount</label><br></br>
        <input name="amount" onChange={storeAmount} type="number"></input>
        <br></br>
        <label htmlFor="description">Reimbursement Description</label><br></br>
        <textarea name="description" maxLength={255} rows={3} onChange={handleChange}></textarea>
        <br></br>
        <button onClick={createReimb}>Create</button>
        </div>
    </div>)
}
export default CreateReimbursement