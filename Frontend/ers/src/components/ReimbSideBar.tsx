import { Reimbursement } from "../Interfaces/Reimbursement"

function ReimbSideBar({amount, description, status}: Reimbursement){
    return (<>
            
                <div className="reimbText">
                    <p>{description.length < 10 ? description : description.substring(0,10) + "..."}</p>
                    <p>{amount}</p>
                    <p>{status}</p>
                </div>
    </>)
}

export default ReimbSideBar