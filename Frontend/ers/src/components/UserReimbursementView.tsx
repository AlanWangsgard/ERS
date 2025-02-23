import ReimbursementView from "./ReimbursementView"
import getUser from "../util/common"
function UserReimbursementView(){
    const user = getUser()
    return(<>
        <ReimbursementView allUrl={`http://localhost:8080/reimbursement/Id/${user.userId}`} pendingUrl={`http://localhost:8080/reimbursement/pending/${user.userId}`}/>
    </>)
}

export default UserReimbursementView