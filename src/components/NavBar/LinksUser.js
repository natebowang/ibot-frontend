import React from "react";
import {NavLink} from "react-router-dom";
import {BiBot, BiPackage, BiTrophy} from "react-icons/bi";
import {PRIMARY_COLOR} from "../../app/config";

/**
 * Link and user icons for mobile screen
 */
const LinksUser = ({flex}) => {
    return (
        <ul style={{...linksUserBoxStyle, flex: flex}}>
            <NavLink to={'/classes'} style={linkStyle} activeStyle={activeLinkStyle}>
                <BiPackage style={linkIconStyle}/> 课程
            </NavLink>

            <NavLink to={'/championship'} style={linkStyle} activeStyle={activeLinkStyle}>
                <BiTrophy style={linkIconStyle}/> 比赛
            </NavLink>

            <NavLink to={'/teachers'} style={linkStyle} activeStyle={activeLinkStyle}>
                <BiBot style={linkIconStyle}/> 教师
            </NavLink>

            <div/>

            <NavLink to={'/login'} style={userStyle} activeStyle={activeLinkStyle}>
                登录
            </NavLink>

            <NavLink to={'/signup'} style={userStyle} activeStyle={activeLinkStyle}>
                注册
            </NavLink>
        </ul>
    )
};

const linksUserBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '320px',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
};

const linkIconStyle = {
    fontSize: '1.1rem',
    margin: '0px 7px -3px 0',
};

const userStyle = {
    ...linkStyle,
    fontSize: '1.1rem',
};

const activeLinkStyle = {
    fontWeight: 'bold',
    color: PRIMARY_COLOR
};

export default LinksUser;
