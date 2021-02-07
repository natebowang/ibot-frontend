import React from "react";
import {FOOTER_HEIGHT, NAV_BAR_HEIGHT} from "../../app/config";

const Main = ({children})=>(
    <main style={mainStyle}>
        {children}
    </main>
);

const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc( 100vh - ${FOOTER_HEIGHT} - ${NAV_BAR_HEIGHT} )`,
};

export default Main;