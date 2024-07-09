// Components
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

// Styles
import "./page-header.css";

function PageHeader() {
    return (
        <header className="page-header">
            <Logo />
            <Navbar type="link-header" />
        </header>
    );
}

export default PageHeader;