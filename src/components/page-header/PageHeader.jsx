import { useState, useEffect } from "react";

// Hooks
import useFadeIn from "../../hooks/useFadeIn";

// Components
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import IconHamburger from "../icon-hamburger/IconHamburger";

// Styles
import "./page-header.css";

function PageHeader() {
    const [isActive, toggleIsActive] = useState(false);                 // Dropdown menu state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);  // Window width state

    // Handle hamburger menu click
    function handleClick() {
        toggleIsActive(!isActive);
    }

    // Monitor window width
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    // Always show navbar on large screens
    useEffect(() => {
        const alwaysShowNavbarOnLargeScreens = () => {
            windowWidth >= 1440 && toggleIsActive(true);
        }

        alwaysShowNavbarOnLargeScreens();
    }, [windowWidth])

    // Apply fade effect to navbar on small screens (needed because CSS display property can't be animated)
    useFadeIn(isActive, windowWidth);   

    return (
        <header className="page-header">
            <Logo />
            {
                isActive &&
                <Navbar
                    type="link-header"
                    windowWidth={windowWidth}
                    isActive={isActive}
                    onOutsideClick={handleClick}
                />
            }
            <IconHamburger
                onClick={handleClick}
                isActive={isActive}
            />
        </header>
    );
}

export default PageHeader;