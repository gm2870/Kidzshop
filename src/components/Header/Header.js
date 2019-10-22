import React, { useState, useEffect } from "react";
import DesktopHeader from "./TopHead/DesktopHeader";
import Navbar from "./Navbar/Navbar";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import MobileHeader from "./TopHead/MobileHeader";

const Header = props => {
    // const [isSearchIconClicked, ShowSearchField] = useState(false);
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

    // const toggleNav = () => {
    //     setNavVisibility(!isNavVisible);
    // };
    return (
        <Auxiliary>
            {isSmallScreen ? (
                <MobileHeader isAuthenticated={props.isAuthenticated} />
            ) : (
                <DesktopHeader isAuthenticated={props.isAuthenticated} />
            )}
            {!isSmallScreen ? <Navbar /> : null}
        </Auxiliary>
    );
};
export default Header;
