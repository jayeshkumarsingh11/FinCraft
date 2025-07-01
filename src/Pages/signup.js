import React from "react";
import Header from "../Component/Header";
import SignupSignin from "../Component/Register";
function Signup() {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <SignupSignin />
            </div>
        </div>
    )
}

export default Signup;