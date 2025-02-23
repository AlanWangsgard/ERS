import axios from "axios"
import { User } from "../Interfaces/User"
import { useEffect, useState } from "react"
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

    useEffect(()=>{

        getUsers()
    }, [])
    return(<>
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
                    <td>{user.role}</td>
                    </tr>
        ))}
        </tbody>
    </>)
}

export default AdminUserView