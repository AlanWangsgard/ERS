import { Reimbursement } from "../Interfaces/Reimbursement"
import getUser from "../util/common"
import axios from "axios"
import { Dispatch, SetStateAction } from "react"

function ReimbFullView({amount, description, status, reimbId, fun, count}: Reimbursement &{fun:Dispatch<SetStateAction<number>>, count:number}){
    const user = getUser()
    async function setStatus(status:string, reimbId:number){
            try{
    
                const response = await axios.put("http://localhost:8080/reimbursement", {description: description, status: status, reimbId: reimbId} ,{withCredentials:true})
                console.log(response.data)
                fun(count+1)
            } catch {
                alert("ststus not changed")
            }
        }
    return(<div className="expandedView">
        <h1>Amount: ${amount}</h1>
        <p>Description: {description}</p>
        <p>Status: {status}</p>
        {user.role == "admin" &&
        <>
        <button onClick={() =>setStatus("Approved",reimbId)}>Approve</button>
        <button onClick={() =>setStatus("Rejected",reimbId)}>Reject</button>
        </>
        }
    </div>)
}

export default ReimbFullView