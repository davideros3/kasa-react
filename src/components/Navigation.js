import React from "react";
import { Link } from "react-router-dom";


const Navigation  = () => {
    return (
        <nav className="main-page">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
        </nav>
    )
}

export default Navigation