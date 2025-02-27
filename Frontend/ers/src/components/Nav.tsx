import { Link } from "react-router"
import "../css/nav.css"
import getUser from "../util/common"
import LogOut from "../Pages/LogOut"
function Nav(){
    const user = getUser()
    return(<div className="navDiv">
    {user.userId != null ? <><LogOut/><Link to="/dashboard">Dashboard</Link></> : <Link to="/">Log In</Link>}
    
    </div>)
    
}

export default Nav