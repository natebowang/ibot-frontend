import React from "react";
import {NavLink} from "react-router-dom";
import {BiUserCircle} from 'react-icons/bi';
import {PRIMARY_COLOR} from "../../app/config";
import defaultAvatar from './defaultAvatar.jpg';
import {useSelector} from "react-redux";
import {selectUserProfile} from "../../store/userSlice";

/**
 * User icon for mobile screen
 */
const User = () => {
    const userProfile = useSelector(selectUserProfile);
    return (
        <>
            {userProfile.username ?
                <NavLink to={'/dashboard'} style={linkStyle} activeStyle={activeLinkStyle}>
                    <img src={defaultAvatar} alt={userProfile.username.split('@')[0]} style={imageStyle}/>
                </NavLink>
                :
                <NavLink to={'/login'} style={linkStyle} activeStyle={activeLinkStyle}>
                    <BiUserCircle style={linkIconStyle}/>
                </NavLink>
            }
        </>
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

const imageStyle = {
    display: 'block',
    width: '1.6rem',
    borderRadius: '50%',
};

export default User;
