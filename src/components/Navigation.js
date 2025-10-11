import React from "react";
import { NavLink } from 'react-router-dom'


const Navigation  = () => {
    return (
        <nav className="main-page">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default Navigation