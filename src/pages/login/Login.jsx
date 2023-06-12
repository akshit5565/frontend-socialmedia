import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
// import {CircularProgress} from "@mui/core-material";

export default function Login() {
    
    const email = useRef();
    const password = useRef();
    const{isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">FriendSphere</h3>
                <span className="loginDesc">Connect with the world on FriendSphere</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                    <input placeholder="Password" type="password" required className="loginInput" minLength="6" ref={password} />
                    <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? "Loading" : "Log In"}</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
