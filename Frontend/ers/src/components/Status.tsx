import "../css/status.css"
function Status({s}: {s:String}){

if (s == "Approved"){
    return <span className="approvedStatus">{s}</span>
}else if(s == "Rejected"){
    return <span className="rejectedStatus">{s}</span>
}else{
    return <span className="pendingStatus">{s}</span>
}
}
export default Status