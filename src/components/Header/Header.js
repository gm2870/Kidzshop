import React, { useState, useEffect } from "react";
import DesktopHeader from "./TopHead/DesktopHeader";
import Navbar from "./Navbar/Navbar";
import MobileHeader from "./TopHead/MobileHeader";

const Header = props => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 75em)");

        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);
    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    return (
        <React.Fragment>
            {isSmallScreen ? (
                <MobileHeader isAuthenticated={props.isAuthenticated} />
            ) : (
                <DesktopHeader isAuthenticated={props.isAuthenticated} />
            )}
            {!isSmallScreen ? <Navbar /> : null}
        </React.Fragment>
    );
};
export default Header;
