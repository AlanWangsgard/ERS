import { Reimbursement } from "../Interfaces/Reimbursement"
import getUser from "../util/common"
import axios from "axios"
import Status from "./Status"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

function ReimbFullView({amount, description, status, reimbId, user, fun, count}: Reimbursement &{fun:Dispatch<SetStateAction<number>>, count:number}){
    const sesUser = getUser()
    const[editMode, setEditMode] = useState('false')
    const[text, setText]= useState(description)
    const [message, setMessage] = useState('')
    useEffect(()=>{
        setEditMode("false")
        setText(description)
    }, [description])
    function checkFields(){
        if(text.length < 10){
            setMessage("Description must be at least 10 Characters")
        }
        else{
            updateReimb()
            setMessage("")
        }
    }
    async function setStatus(status:string, reimbId:number){
            try{
    
                await axios.put("http://localhost:8080/reimbursement", {description: description, status: status, reimbId: reimbId} ,{withCredentials:true})
                fun(count+1)
            } catch {
                alert("ststus not changed")
            }
        }

    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
          setText(event.target.value);
        };

        async function updateReimb(){
            
            try{
        
                await axios.put("http://localhost:8080/reimbursement", {reimbId: reimbId, status: status, description: text, amount: amount, userId: user.userId}, {withCredentials:true})
             
                setEditMode('false')
                fun(count+1)
            } catch {
                alert("unsuccessful")
            }
        }
    return(<div className="expandedView">
        {message != "" && <p className="message">{message}</p>}
        <h1>Amount: ${amount}</h1>
        {editMode == 'false' ? <p>Description: {text}</p> : <><label htmlFor="description">Reimbursement Description</label><br></br>
        <textarea id="description" name="description" maxLength={255} rows={3} value={text} onChange={handleChange}></textarea></>}
        <p>Status: <Status s={status}/></p>
        {sesUser.role == "admin" &&
        <>
        <button onClick={() =>setStatus("Approved",reimbId)}>Approve</button>
        <button onClick={() =>setStatus("Rejected",reimbId)}>Reject</button>
        </>
        }
        {(sesUser.userId == user.userId && editMode == "false") &&
        <button onClick={() => {setEditMode('true'); setText(description)}}>Edit</button>
        }
        {editMode == "true" && <><button onClick={() => checkFields()}>Save Changes</button><button onClick={() => setEditMode('false')}>Cancel</button></>}
    </div>)
}

export default ReimbFullView