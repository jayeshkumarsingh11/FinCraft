import React, { useEffect } from "react";
import "./styles.css";
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

function Header() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (user) {
            navigate("/Dashboard");
        }
    }, [user, loading])
    function logoutfnc() {
        try {
            signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("User Logged Out Successfully");
        navigate("/");
        }).catch((error) => {
            toast.error(error.message);
        // An error happened.
        });
        } catch (e) {
            toast.error(e.message);
        }
    }
    return (
        <div className = "navbar">
            <div className="logo">FinCraft</div>
            {user && <div className="logo link" onClick={logoutfnc}>Logout</div>}
        </div>
    )
}

export default Header;