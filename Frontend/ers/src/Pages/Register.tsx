function Register(){
    return <>
    <div className="registerBackground">
    <div className="registerDiv">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input className="loginDivButton" type="button" value={"Register"}></input>
    </div>
    </div>
    </>
}

export default Register