import axios from "axios"
import Nav from "../components/nav"
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
    return(<>
    <Nav/>
        <input name="amount" onChange={storeAmount} type="number"></input>
        <textarea name="description" maxLength={255} rows={3} onChange={handleChange}></textarea>
        <button onClick={createReimb}>Create</button>
    </>)
}
export default CreateReimbursement