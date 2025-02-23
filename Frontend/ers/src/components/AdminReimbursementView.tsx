import ReimbursementView from "./ReimbursementView"
function AdminReimbursementView(){
    return(<>
        <ReimbursementView allUrl={"http://localhost:8080/reimbursement/all"} pendingUrl={`http://localhost:8080/reimbursement/pending/all`}/>
    </>)
}

export default AdminReimbursementView