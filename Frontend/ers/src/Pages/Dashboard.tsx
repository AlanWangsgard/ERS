import { Link } from "react-router"
import "../css/dashboard.css"

function Dashboard(){
    const user = sessionStorage.getItem('user')
    const u = JSON.parse(user || '{}')
    return(
        <>
        <div className="dashboardContainer">
            <div className="dashItem"><Link to="/reimbursement">View Reimbursements</Link></div>
            <div className="dashItem"><Link to="/create">Create Reimbursements</Link></div>
            {u.role == "admin" &&
            <div className="dashItem"><Link to="/admin">Users</Link></div>
            }
            
        </div>
        </>
    )
}

export default Dashboard