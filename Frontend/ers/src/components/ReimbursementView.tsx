import axios from "axios"
import Nav from "./Nav"
import "../css/reimbursement.css"
import ReimbFullView from "./ReimbFullView"
import { useEffect, useState } from "react"
import { Reimbursement } from "../Interfaces/Reimbursement"
import ReimbSideBar from "./ReimbSideBar"

function ReimbursementView({ allUrl, pendingUrl}: {allUrl:string, pendingUrl:string}){
    const [reimbursements, setReimbursements] = useState([])
    const [fullDetails, setFullDetails] = useState<Reimbursement>()
    const [pending, setPending] = useState("false")
    const [recorsChanged, setRecordsChanged] = useState(0)
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

    }, [pending, recorsChanged])

    return (<>
        <Nav />
           <div className="container">
        <div className="reimbContain">
        <select className="reimbSelect" name="status" onChange={e => setPending(e.target.value)}>
            <option value={"false"}>All Reimbursements</option>
            <option value={"true"}>Pending Reimbursements</option>
        </select>
            {reimbursements.map((reimb:Reimbursement)=>
                <div key={reimb.reimbId} className="reimbursement"  onClick={() => showFull(reimb.reimbId)}> 
                    <ReimbSideBar {...reimb}/>
                </div>
            )}
        </div>
        <div className="fullView">
        {fullDetails != null &&
        <ReimbFullView count={recorsChanged} fun={setRecordsChanged}{...fullDetails} />
        }
        </div>
        </div>
    </>
    )
}

export default ReimbursementView