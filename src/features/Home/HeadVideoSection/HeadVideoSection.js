import React from "react";
import {NAV_BAR_HEIGHT} from "../../../app/config";

import Video from './HeadVideo.mp4';

const HeadVideoSection = () => {
    return (
        <section style={sectionStyle}>
            <video autoPlay={true} muted loop style={videoStyle}>
                <source src={Video} type={"video/mp4"}/>
            </video>
        </section>
    )
};

const sectionStyle = {};

const videoStyle = {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: `calc( 100vh - ${NAV_BAR_HEIGHT} )`,
    margin: '0 auto',
    backgroundColor: 'black',
};

export default HeadVideoSection;