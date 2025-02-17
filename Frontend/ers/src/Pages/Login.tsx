// import background from  "../assets/road.jpg"
import "../App.css"
function Login(){
    return <>
    <div className="loginBackground">
        <div className="loginDiv">
            <h2>Login</h2>
            <input placeholder="Username" type="text"></input>
            <br></br>
            <input placeholder="Password" type="password"></input>
            <br></br>
            <input className="loginDivButton" type="button" value={"Log In"}></input>
            <input className="loginDivButton" type="button" value={"Register"}></input>
        </div>
        {/* <img src={background}></img> */}
    </div>
    </>
}

export default Login