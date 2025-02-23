import axios from "axios"
import Nav from "./nav"
import "../css/reimbursement.css"
import ReimbFullView from "./ReimbFullView"
import { useEffect, useState } from "react"
import { Reimbursement } from "../Interfaces/Reimbursement"
import ReimbSideBar from "./ReimbSideBar"

function ReimbursementView({ allUrl, pendingUrl}: {allUrl:string, pendingUrl:string}){
    const [reimbursements, setReimbursements] = useState([])
    const [fullDetails, setFullDetails] = useState<Reimbursement>()
    const [pending, setPending] = useState("false")
    async function getReimbursements(){
        try{

            const response = await axios.get(allUrl, {withCredentials:true} )
            console.log(response.data)
            setReimbursements(response.data)
            

        } catch {
            alert("no :(")
        }
    }
    async function getPendingReimbursements(){
        try{

            const response = await axios.get(pendingUrl, {withCredentials:true})
            console.log(response.data)
            setReimbursements(response.data)
            

        } catch {
            alert("no :(")
        }
    }

    function showFull(i:number){
         const data:Reimbursement = reimbursements.find(({ reimbId }) => reimbId === i)!
         console.log(i)
         console.log(data)
         setFullDetails(data)
        console.log(fullDetails)

    }
    
    useEffect(()=>{
        // setURLs(user.role)

        if(pending == "false"){
        getReimbursements()
        }else{
        getPendingReimbursements()
        }

    }, [pending])

    return (<>
        <Nav />
        <select name="status" onChange={e => setPending(e.target.value)}>
            <option value={"false"}>All Reimbursements</option>
            <option value={"true"}>Pending Reimbursements</option>
        </select>
           <div className="container">
        <div className="reimbContain">
            {reimbursements.map((reimb:Reimbursement)=>
                <div key={reimb.reimbId} className="reimbursement"  onClick={() => showFull(reimb.reimbId)}> 
                    <ReimbSideBar {...reimb}/>
                    {/* <input type="button" value={"show more"} onClick={() => showFull(reimb.reimbId)}></input> */}
                </div>
            )}
        </div>
        <div className="fullView">
        {fullDetails != null &&
        <ReimbFullView {...fullDetails} />
        }
        </div>
        </div>
    </>
    )
}

export default ReimbursementView