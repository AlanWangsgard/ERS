import getUser from "../util/common"
import AdminReimbursementView from "../components/AdminReimbursementView"
import UserReimbursementView from "../components/UserReimbursementView"
import { useNavigate } from "react-router"
import { useEffect } from "react"
function ReinbursementViewer(){
    const navigate = useNavigate()
    useEffect(()=>{
        if(user == null){
            navigate("/")
        }
    }, [])
    const user = getUser()
    return(<>
        {user.role=="admin" ? <AdminReimbursementView/> : <UserReimbursementView/>}
    </>)
}

export default ReinbursementViewer