import axios from "axios"
import "../css/reimbursement.css"
import ReimbFullView from "../components/reimbFullView"
import getUser from "../util/common"
import { useEffect, useState } from "react"
import { Reimbursement } from "../Interfaces/Reimbursement"

function ReimbursementView(){

    const [reimbursements, setReimbursements] = useState([])
    const [fullDetails, setFullDetails] = useState<Reimbursement>()

    const user = getUser()
    async function getReimbursements(){
        try{

            const response = await axios.post("http://localhost:8080/reimbursement/Id", user, {withCredentials:true} )
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

        getReimbursements()

    }, [])

    return (<>
    
        <div className="container">
        <div className="reimbContain">
            {reimbursements.map((reimb:Reimbursement)=>
            <div key={reimb.reimbId} className="reimbursement">
                <div className="reimbText">
                    <p>{reimb.description.length < 10 ? reimb.description : reimb.description.substring(0,10) + "..."}</p>
                    <p>{reimb.amount}</p>
                    <p>{reimb.status}</p>
                    <input type="button" value={"show more"} onClick={() => showFull(reimb.reimbId)}></input>
                </div>
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