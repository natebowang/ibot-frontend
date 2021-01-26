import React from "react";
import {NAV_BAR_HEIGHT, MOBILE_PORTRAIT_WIDTH} from "../../app/config";
import {selectWiw} from "../../store/appSlice";
import {useSelector} from "react-redux";
import IBotLogo from "./IBotLogo";
import Links from "./Links";
import User from "./User";
import LinksUser from "./LinksUser";

/**
 * Navigation bar
 * @returns {*}
 * @constructor
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

const NavBarDesktop = () => {
    return (
        <>
            <IBotLogo/>
            <LinksUser/>
        </>
    )
};


const NavBarMobile = () => {
    return (
        <>
            <Links/>
            <IBotLogo/>
            <User/>
        </>
    )
};

export default NavBar;