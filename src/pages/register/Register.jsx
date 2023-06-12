import "./register.css";
import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords do not match");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
                await axios.post("/auth/register",user);
                navigate("/login");

            }catch(err){
                console.log(err);
            }
        }
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
                    <input placeholder="Username" required ref={username} className="loginInput" />
                    <input placeholder="Email" required ref={email} type="email" className="loginInput" />
                    <input placeholder="Password" required ref={password} type="password" className="loginInput" />
                    <input placeholder="Password Again" required ref={passwordAgain} type="password" className="loginInput" />
                    <button className="loginButton" type="submit">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
