import { useState } from "react";

// Components
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import IconHamburger from "../icon-hamburger/IconHamburger";

// Styles
import "./page-header.css";

function PageHeader() {
    // Monitor dropdown menu state
    const [isActive, toggleIsActive] = useState(false);

    // Handle hamburger menu click
    function handleClick() {
        isActive ? toggleIsActive(false) : toggleIsActive(true);
    }

    return (
        <header className="page-header">
            <Logo />
            <Navbar type="link-header" isActive={isActive} />
            <IconHamburger onClick={handleClick} isActive={isActive} />
        </header>
    );
}

export default PageHeader;