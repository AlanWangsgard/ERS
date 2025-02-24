import { Reimbursement } from "../Interfaces/Reimbursement"

function ReimbSideBar({amount, description, status}: Reimbursement){
    return (<>
            
                <div className="reimbText">
                <h1>Amount: ${amount}</h1>
                    <p>{description.length < 10 ? `Description: ${description}` : `Description: ${description.substring(0,10)}...`}</p>
                    <p>Status: {status}</p>
                </div>
    </>)
}

export default ReimbSideBar