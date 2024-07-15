import { useState, useEffect, useCallback } from "react";

// Hooks
import useFadeIn from "../../hooks/useFadeIn";

// Components
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import IconHamburger from "../icon-hamburger/IconHamburger";

// Styles
import "./page-header.css";

function PageHeader() {
    const [isActive, setIsActive] = useState(false);                 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const handleClick = useCallback(() => {
        setIsActive(prevIsActive => !prevIsActive);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        if (windowWidth >= 1440) {
            setIsActive(true);
        }
    }, [windowWidth]);

    useFadeIn(isActive, windowWidth);

    return (
        <header className="page-header">
            <Logo />
            {isActive && (
                <Navbar
                    type="link-header"
                    windowWidth={windowWidth}
                    isActive={isActive}
                    onOutsideClick={handleClick}
                />
            )}
            <IconHamburger
                onClick={handleClick}
                isActive={isActive}
            />
        </header>
    );
}

export default PageHeader;