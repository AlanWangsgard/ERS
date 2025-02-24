import axios from "axios"
import { User } from "../Interfaces/User"
import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import "../css/user.css"
function AdminUserView(){
    const [users, setUsers] = useState([])
    async function getUsers(){
        try{

            const response = await axios.get("http://localhost:8080/users", {withCredentials:true} )
            console.log(response.data)
            setUsers(response.data)

        } catch {
            alert("no :(")
        }
    }

    async function promoteUser(UserId:number, role:string){
        try{

            const response = await axios.post("http://localhost:8080/users", {userId: UserId, role: role},{withCredentials:true} )
            console.log(response.data)
            getUsers()
            

        } catch {
            alert("user not promoted")
        }
    }
    async function deleteUser(UserId:number){
        try{

            const response = await axios.delete(`http://localhost:8080/reimbursement/${UserId}`,{withCredentials:true} )
            console.log(response.data)
            getUsers()
            

        } catch {
            alert("user not fired")
        }
    }

    useEffect(()=>{

        getUsers()
    }, [])
    return(<div className="userRoot">
    <Nav/>
    <table>
        <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                {users.map((user:User)=>(
                    <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.username}</td>
                    <td>{user.role == "admin" ? <span className="admin">{user.role}</span>: user.role}</td>
                    <td>
                                <button className="promote" onClick={() => promoteUser(user.userId, "admin")}>Promote</button>
                                <button className="demote" onClick={() => promoteUser(user.userId, "user")}>Demote</button>
                                <button className="fire" onClick={() => deleteUser(user.userId)}>Fire</button>
                            </td>
                    </tr>
        ))}
        </tbody>
        </table>
    </div>)
}

export default AdminUserView