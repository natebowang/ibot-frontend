import React from "react";
import {Link} from "react-router-dom";

/**
 * IBot logo icon for all screens
 * @param flex - flex shorthand property for flex items.
 */
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