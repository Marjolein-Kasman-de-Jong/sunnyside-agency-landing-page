// Components
import ClickOutsideWrapper from "../click-outside-wrapper/ClickOutsideWrapper";

// Styles
import "./navbar.css";

function Navbar({ type, windowWidth, isActive, onOutsideClick}) {

    if (!isActive) {
        return null;
    }

    return (
        <ClickOutsideWrapper onOutsideClick={onOutsideClick}>
            <nav className={`navbar ${windowWidth < 1440 && isActive ? "active" : ""}`}>
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
            </nav>
        </ClickOutsideWrapper>
    );
}

export default Navbar;