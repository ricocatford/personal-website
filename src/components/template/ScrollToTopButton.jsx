import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScrollToTopButtonVisibility = () => {
            window.pageYOffset > 300
                ? setShowButton(true)
                : setShowButton(false);
        };

        window.addEventListener("scroll", handleScrollToTopButtonVisibility);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScrollToTopButtonVisibility
            );
        };
    }, []);

    return (
        <>
            {showButton && (
                <button
                    className="btn--scroll-to-top box-shadow"
                    onClick={handleScrollToTop}
                >
                    <i className="fa-solid fa-arrow-up" />
                </button>
            )}
        </>
    );
}
