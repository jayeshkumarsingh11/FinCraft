import React from "react";
import "./styles.css";

function Header() {
    function logoutfnc() {
        alert("Logout");
    }
    return (
        <div className = "navbar">
            <div className="logo">FinCraft</div>
            <div className="logo link" onClick={logoutfnc}>Logout</div>
        </div>
    )
}

export default Header;