import React from "react";
import {NavLink} from "react-router-dom";
import {
    BiListUl,
    BiPackage,
    BiBot,
    BiTrophy,
} from 'react-icons/bi';
import {NAV_BAR_HEIGHT, PRIMARY_COLOR} from "../../app/config";
import Dropdown from "../Dropdown/Dropdown";

/**
 * Links dropdown menu for mobile screen
 */
const LinksDropDown = () => {
    return (
        <Dropdown
            toggleButtonStyle={toggleButtonStyle}
            toggleButtonIcon={<BiListUl/>}
        >
            <ul style={ulStyle}>
                <NavLink to={'/classes'} style={linkStyle} activeStyle={activeLinkStyle}>
                    <BiPackage style={linkIconStyle}/> 课程
                </NavLink>
                <NavLink to={'/championship'} style={linkStyle}
                         activeStyle={activeLinkStyle}>
                    <BiTrophy style={linkIconStyle}/> 比赛
                </NavLink>
                <NavLink to={'/teachers'} style={linkStyle}
                         activeStyle={activeLinkStyle}>
                    <BiBot style={linkIconStyle}/> 教师
                </NavLink>
            </ul>
        </Dropdown>
    )
};

export default LinksDropDown;

const toggleButtonStyle = {
    margin: '0px 0px -2px 0',
    padding: '0',
    border: 'none',

    fontSize: '1.8rem',

    // color
    backgroundColor: 'black',
    color: 'white',
};

const ulStyle = {
    // flex box
    display: 'flex',
    flexDirection: 'column',

    // position
    position: 'absolute',
    top: NAV_BAR_HEIGHT,
    left: '0',

    // size
    width: '100%',
    margin: '0',
    padding: '0.5rem 1.5rem',

    // color
    backgroundColor: 'black',

    // others
    listStyle: 'none',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
    padding: '0.5rem 0rem 0.5rem 0.4rem',
};

const activeLinkStyle = {
    fontWeight: 'bold',
    color: PRIMARY_COLOR
};

const linkIconStyle = {
    fontSize: '0.9rem',
    margin: '0px 15px -2px 10px',
};

