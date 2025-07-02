import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import googleRegister from './googleLogin';
import createDoc from './doc';

function Login({setLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function logInWithEmail() {
    if (email !== "" && password != ""){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          toast.success("User Logged In Successfully");
          navigate("/dashboard");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
        setEmail("");
        setPassword("");
    } else {
      toast.error("Please enter email and password");
    }

  }
  return (
    <div className="signup-wrapper">
          <div className='title'>Login </div>
          <form>
              <Input 
              type = {"email"}
              label = {"Email"} 
              state = {email} 
              setState = {setEmail} 
              placeholder = {"JohnDoe@gmail.com"}/>
              <Input 
              type = {"password"}
              label = {"Password"} 
              state = {password} 
              setState = {setPassword} 
              placeholder = {"Example@123"}/>
              
              <Button 
              text = {"Login using Email"} 
              onClick = {logInWithEmail} />
              <div className = "mid">or</div>
              <Button text = {"Login using Google"} onClick = {() =>googleRegister(navigate)} />
              <div className="account-text">
                Don't have an account? <span className="link" onClick = {() => setLogin(false)}>Signup</span>
              </div>
          </form>
      </div>
  )
}

export default Login;