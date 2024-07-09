// Components
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import SocialLinks from "../social-links/SocialLinks";

// Styles
import "./page-footer.css";

function PageFooter() {
    return (
        <footer className="page-footer">
            <Logo />
            <Navbar type="link-footer" />
            <SocialLinks />
        </footer>
    );
}

export default PageFooter;