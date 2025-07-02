import React, { useState } from 'react'
import './styles.css';
import Input from '../Input';
import Button from '../Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import createDoc from './doc';
import { useNavigate } from 'react-router-dom';
import googleRegister from './googleLogin';

function Signup({setLogin}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    function signUpWithEmail() {
      setLoading(true);
      if(name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
        if (password === confirmPassword){
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user);
              toast.success("User Created Successfully");
              setLoading(false);
              setName("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              createDoc(user, name);
              navigate("/Dashboard");
            
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
              const errorMessage = error.message;
              toast.error(errorMessage);
              setLoading(false);
              // ..
            });
        } else {
          toast.error("Password does not match");
          setLoading(false);
        }
      } else {
        toast.error("All fields are Required");
        setLoading(false);
      }
    }
  return (
    <div className="signup-wrapper">
          <div className='title'>Sign Up </div>
          <form>
              <Input 
              label = {"Full Name"} 
              state = {name} 
              setState = {setName} 
              placeholder = {"John Doe"}/>
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
              <Input 
              type = {"password"}
              label = {"ConfirmPassword"} 
              state = {confirmPassword} 
              setState = {setConfirmPassword} 
              placeholder = {"Example@123"}/>
              <Button 
              disabled = {loading}
              text = {loading?"Loading...":"Signup using Email"} 
              onClick = {signUpWithEmail} />
              <div className = "mid">or</div>
              <Button text = {loading?"Loading...":"Signup using Google"} onClick={() => googleRegister(navigate)}/>
              <div className="account-text">
                Don't have an account? <span className="link" onClick={() => setLogin(true)}>Login</span>
              </div>
          </form>
      </div>
  )
}
export default Signup;