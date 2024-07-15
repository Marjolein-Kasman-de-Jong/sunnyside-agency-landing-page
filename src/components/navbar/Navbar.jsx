// Components
import ClickOutsideWrapper from "../click-outside-wrapper/ClickOutsideWrapper";
import Button from "../button/Button";

// Styles
import "./navbar.css";

function Navbar({ type, windowWidth, isActive, onOutsideClick }) {
    if (type === "link-header" && !isActive) {
        return null;
    }

    const renderNavContent = () => (
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
            {type === "link-header" && (
                <li>
                    <Button buttonText="contact" />
                </li>
            )}
        </ul>
    );

    const renderLinkHeaderNav = () => (
        <ClickOutsideWrapper 
            onOutsideClick={onOutsideClick} 
            windowWidth={windowWidth}
        >
            <nav className={`navbar ${windowWidth < 1440 && isActive ? "active" : ""}`} id="navbar">
                {renderNavContent()}
            </nav>
        </ClickOutsideWrapper>
    );

    const renderDefaultNav = () => (
        <nav className="navbar">
            {renderNavContent()}
        </nav>
    );

    return type === "link-header" ? renderLinkHeaderNav() : renderDefaultNav();
}

export default Navbar;