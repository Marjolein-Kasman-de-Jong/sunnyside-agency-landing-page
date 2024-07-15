import { useEffect, useRef } from "react";

function ClickOutsideWrapper({ onOutsideClick, children, windowWidth }) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            const isClickOutside = ref.current && !ref.current.contains(event.target);
            const hamburgerMenu = document.getElementById('hamburger-menu');
            const isClickOutsideHamburger = hamburgerMenu && !hamburgerMenu.contains(event.target);

            if (windowWidth < 1440 && isClickOutside && isClickOutsideHamburger) {
                onOutsideClick();
            }
        }

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        
        return () => {
            document.addEventListener('click', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [onOutsideClick]);

    return <div className="click-outside-wrapper" ref={ref}>{children}</div>;
}

export default ClickOutsideWrapper;