import { Link } from "react-router"
import "../css/dashboard.css"
import Nav from "../components/Nav"
import { useNavigate } from "react-router"
import { useEffect } from "react"

function Dashboard(){
    const navigate = useNavigate()
    const user = sessionStorage.getItem('user')
    const u = JSON.parse(user || '{}')
    useEffect(()=>{
        if(user == null){
            navigate("/")
        }
    }, [])
    return(
        <>
        <Nav/>
        <div className="dashboardContainer">
        <Link to="/reimbursement"><div className="dashItem viewReimb"><span className="dashText">View Reimbursements</span></div></Link>
        <Link to="/create"><div className="dashItem createReimb"><span className="dashText">Create Reimbursements</span></div></Link>
            {u.role == "admin" &&
            <Link to="/admin"><div className="dashItem users"><span className="dashText">Users</span></div></Link>
            }
            
        </div>
        </>
    )
}

export default Dashboard