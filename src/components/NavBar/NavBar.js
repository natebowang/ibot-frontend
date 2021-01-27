import React from "react";
import {NAV_BAR_HEIGHT, MOBILE_PORTRAIT_WIDTH} from "../../app/config";
import {selectWiw} from "../../store/appSlice";
import {useSelector} from "react-redux";
import IBotLogo from "./IBotLogo";
import LinksDropDown from "./LinksDropDown";
import User from "./User";
import LinksUser from "./LinksUser";

/**
 * Navigation bar
 */
const NavBar = () => {
    const wiw = useSelector(selectWiw);

    return (
        <div>
            <nav style={navBarStyle}>
                {wiw > MOBILE_PORTRAIT_WIDTH ? <NavBarDesktop/> : <NavBarMobile/>}
            </nav>
            <div style={placeHolderStyle}/>
        </div>
    )
};

const navBarStyle = {
    // position
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: '1000', // maximum value in this project
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    // color
    backgroundColor: 'black',
    color: 'white',

    // size
    width: '100%',
    height: NAV_BAR_HEIGHT,
    padding: '0 2rem',
};

const placeHolderStyle = {
    backgroundColor: 'black',
    height: NAV_BAR_HEIGHT,
};

/**
 * Wide navigation bar for desktop screen
 */
const NavBarDesktop = () => {
    return (
        <>
            <IBotLogo flex={2}/>
            <LinksUser flex={4}/>
        </>
    )
};

/**
 * Narrow navigation bar for mobile screen
 */
const NavBarMobile = () => {
    return (
        <>
            <LinksDropDown flex={0}/>
            <IBotLogo flex={0}/>
            <User flex={0}/>
        </>
    )
};

export default NavBar;