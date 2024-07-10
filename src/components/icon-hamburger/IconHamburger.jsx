// Styles
import "./icon-hamburger.css";

function IconHamburger({ onClick, isActive }) {
    return (
        <svg
            className={`icon-hamburger ${isActive ? "fade" : ""}`}
            id="hamburger-menu"
            width="24"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
                fill="#FFF"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default IconHamburger;