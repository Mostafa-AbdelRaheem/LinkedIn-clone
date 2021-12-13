import React,{useState} from 'react';
import {auth} from '../utils/firebase';
import '../styles/login.css';
import {login} from'../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const [refresh,setRefresh]=useState("");

    const dispatch=useDispatch();


    const loginToApp=(e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then((userAuth)=>{
        dispatch(login(
            {
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }
        ))
    })
    };

    const register=()=>{
        if(!name){
            return alert("please enter a full name!");
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then(userAuth=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            })
            .then(()=>
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                }))
            )
            setTimeout(() => {
                window.location.reload();
              }, 1000)

        })
        .catch((error)=>alert(error));
    };
    return (
        <div className="loginContainer">
            <div className="LoginImageContainer">
                <img className="LoginImage" src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"/>
            </div>
            <form className="loginForm">
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name (required if registering)" type="text"></input>
                <input value={profilePic} onChange={e=>{setProfilePic(e.target.value)}} placeholder="Profile Picture Url(Optional)" type="text"></input>
                <input value={email} onChange={e=>{setEmail(e.target.value)}} placeholder="Email" type="email"></input>
                <input value={password} onChange={e=>{setPassword(e.target.value)}} placeholder="Password" type="password"></input>
                <button className="loginBtn" type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className="loginRegester" onClick={register}>Register Now</span>
            </p>

        </div>
      );
}
 
export default Login;