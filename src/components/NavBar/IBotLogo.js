import React from "react";
import {Link} from "react-router-dom";

const IBotLogo = ({flex}) => {
    return (
        <Link to={'/'} style={{...style, flex}}>iBot</Link>
    )
};

const style = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.8rem',
    fontFamily: '"Audiowide", sans-serif, monospace',
};

export default IBotLogo;