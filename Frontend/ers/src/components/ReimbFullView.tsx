import { Reimbursement } from "../Interfaces/Reimbursement"

function ReimbFullView({amount, description, status}: Reimbursement){
    return(<>
        <h1>{amount}</h1>
        <p>{description}</p>
        <p>{status}</p>
    </>)
}

export default ReimbFullView