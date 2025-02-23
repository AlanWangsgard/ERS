import getUser from "../util/common"
import AdminReimbursementView from "../components/AdminReimbursementView"
import UserReimbursementView from "../components/UserReimbursementView"
function ReinbursementViewer(){
    const user = getUser()
    return(<>
        {user.role=="admin" ? <AdminReimbursementView/> : <UserReimbursementView/>}
    </>)
}

export default ReinbursementViewer