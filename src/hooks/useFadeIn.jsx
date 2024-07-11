import { useEffect } from "react";

const useFadeIn = (isActive, windowWidth) => {
    useEffect(() => {
        if (isActive && windowWidth < 1440) {
            const navbar = document.getElementById("navbar");
            let opacity = 0;
            const duration = 500; 
            const interval = 10; 
            const increment = interval / duration;

            // Change opacity
            function changeOpacity() {
                opacity += increment;
                if (opacity >= 1) {
                    opacity = 1;
                    clearInterval(fadeEffect);
                }
                navbar.style.opacity = opacity;
            }

            // Set interval to change opacity
            const fadeEffect = setInterval(() => {
                requestAnimationFrame(changeOpacity);
            }, interval);

            return () => clearInterval(fadeEffect);
        }
    }, [isActive]);
}

export default useFadeIn;