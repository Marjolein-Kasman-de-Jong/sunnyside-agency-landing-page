// Styles
import "./navbar.css";

function Navbar({ type }) {
    return (
        <nav className="navbar">
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
    );
}

export default Navbar;