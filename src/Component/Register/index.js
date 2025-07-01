import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

function SignupSignin() {
  const[login, setLogin] = useState(true);
    
    return (
      <div className="Register">
        <>
        {login?<Login setLogin = {setLogin} />:<Signup setLogin = {setLogin} />}
        </>
      </div>
    );
}

export default SignupSignin;