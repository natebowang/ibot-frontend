import React from "react";
import Radium from "radium";

import curvyLines from './curvyLines.png';

const Section = ({children, bkImg = false}) => {
    return (
        <section style={bkImg ? sectionWithBkImgStyle : sectionStyle}>
            {children}
        </section>
    )
};

const sectionStyle = {
};

const sectionWithBkImgStyle = {
    ...sectionStyle,
    backgroundColor: '#FFFAEE',
    backgroundImage: `url(${curvyLines})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '120% 200%',
    // backgroundSize: 'auto auto',
    // backgroundPositionX: 'center',
    backgroundPositionY: '-5rem',
};

export default Radium(Section);
