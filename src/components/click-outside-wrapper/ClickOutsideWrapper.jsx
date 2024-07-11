import { useEffect, useRef } from "react";

function ClickOutsideWrapper({ onOutsideClick, children }) {
    // Create ref  
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            // Check if click was outside ref element and not on hamburger menu, and call onOutsideClick()
            if (ref.current && !ref.current.contains(event.target)) {
                const hamburgerMenu = document.getElementById('hamburger-menu');
                if (hamburgerMenu && !hamburgerMenu.contains(event.target)) {
                    onOutsideClick();
                } 
            }
        }

        // Add event listener to document
        document.addEventListener('touchstart', handleClickOutside);   

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [onOutsideClick]);

    return <div className="click-outside-wrapper" ref={ref}>{children}</div>;
}

export default ClickOutsideWrapper;