import { Reimbursement } from "../Interfaces/Reimbursement"
import { useEffect } from "react"
import Status from "./Status"

function ReimbSideBar({amount, description, status}: Reimbursement){
    useEffect(()=>{
            
        }, [description])
    return (<>
            
                <div className="reimbText">
                <h1>Amount: ${amount}</h1>
                    <p>{description.length < 10 ? `Description: ${description}` : `Description: ${description.substring(0,10)}...`}</p>
                    <p>Status: <Status s={status}/></p>
                </div>
    </>)
}

export default ReimbSideBar