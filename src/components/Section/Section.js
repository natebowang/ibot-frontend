import React from "react";
import Radium from "radium";

import curvyLines from './curvyLines.png';
import {SECONDARY_COLOR} from "../../app/config";

const Section = ({children, bkImg = false, style}) => {
    return (
        <section style={bkImg ? {...sectionWithBkImgStyle, ...style} : {...sectionStyle, ...style}}>
            {children}
        </section>
    )
};

const sectionStyle = {
    flex: '1 0 auto'
};

const sectionWithBkImgStyle = {
    ...sectionStyle,
    backgroundColor: SECONDARY_COLOR,
    backgroundImage: `url(${curvyLines})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '120% 200%',
    // backgroundSize: 'auto auto',
    // backgroundPositionX: 'center',
    backgroundPositionY: '-5rem',
};

export default Radium(Section);
