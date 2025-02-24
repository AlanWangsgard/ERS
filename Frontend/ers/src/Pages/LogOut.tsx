import axios from "axios"
import { useNavigate } from "react-router"
function LogOut(){
    const navigate = useNavigate()
    async function logOut(){
        try{
        await axios.get('http://localhost:8080/auth/logout', {withCredentials:true})
        sessionStorage.clear()
            navigate("/")
        }catch{
            "didn't log out"
        }
    }
    return (<>
        <button className="logoutButton" onClick={() => logOut()}>Log Out</button>
    </>)
}

export default LogOut