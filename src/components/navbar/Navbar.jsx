// Components
import ClickOutsideWrapper from "../click-outside-wrapper/ClickOutsideWrapper";

// Styles
import "./navbar.css";

function Navbar({ type, windowWidth, isActive, onOutsideClick }) {
    if (type === "link-header" && !isActive) {
        return null;
    }

    const navContent = (
        <ul>
            <li className={type}>
                about
            </li>
            <li className={type}>
                services
            </li>
            <li className={type}>
                projects
            </li>
            {
                type === "link-header" &&
                <li>
                    contact
                </li>
            }
        </ul>
    );

    if (type === "link-header") {
        return (
            <ClickOutsideWrapper onOutsideClick={onOutsideClick}>
                <nav className={`navbar ${windowWidth < 1440 && isActive ? "active" : ""}`}>
                    {navContent}
                </nav>
            </ClickOutsideWrapper>
        )
    } else {
        return (
            <nav className="navbar">
                {navContent}
            </nav>
        )
    }
}

export default Navbar;