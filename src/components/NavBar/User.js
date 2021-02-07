import React from "react";
import {NavLink} from "react-router-dom";
import {BiUserCircle} from 'react-icons/bi';
import {PRIMARY_COLOR} from "../../app/config";

/**
 * User icon for mobile screen
 */
const User = () => {
    return (
        <NavLink to={'/login'} style={linkStyle} activeStyle={activeLinkStyle}>
            <BiUserCircle style={linkIconStyle}/>
        </NavLink>
    )
};

const linkStyle = {
    color: 'white',
};

const linkIconStyle = {
    fontSize: '1.6rem',
    margin: '0px 0px -2px 0',
};

const activeLinkStyle = {
    fontWeight: 'bold',
    color: PRIMARY_COLOR
};

export default User;
