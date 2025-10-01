import React from "react";
import Logo from "./Logo";
import imageLogo from "../assests/kasar.png"
import Navigation from "./Navigation";


const Header = () => {
    return (
        <header className="header">
            
            <Logo logo={imageLogo} />
            <Navigation/>
        </header>

    )

}

export default Header