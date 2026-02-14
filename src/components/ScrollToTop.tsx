import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
    const [pathname] = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant" // use "smooth" if you want animation
        });
    }, [pathname]);

    return null;
}
