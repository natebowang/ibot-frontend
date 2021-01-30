import React from 'react';
import qr from './mokeQR.jpg';
import {useSelector} from "react-redux";
import {selectWiw} from "../../store/appSlice";
import {FOOTER_HEIGHT, MOBILE_PORTRAIT_WIDTH} from "../../app/config";
import {NavLink} from "react-router-dom";

const Footer = () => {
    const wiw = useSelector(selectWiw);
    return (
        <footer style={footerStyle}>
            <div style={boxStyle}>
                {wiw > MOBILE_PORTRAIT_WIDTH ? <Links/> : null}
                <div style={itemStyle}>
                    <h2 style={boldLinksStyle}>微信关注</h2>
                    <p style={normalLinksStyle}>
                        微信 ：caomin19690307
                    </p>
                    <img src={qr} alt={'QR'} style={qrStyle}/>
                </div>
                <div style={itemStyle}>
                    <h2 style={boldLinksStyle}>联系我们</h2>
                    <p style={normalLinksStyle}>
                        电话：0279689953
                    </p>
                    <p style={normalLinksStyle}>
                        邮箱：cx4648@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    )
};

const Links = () => (
    <>
        <div style={itemStyle}>
            <NavLink to={'./teachers'} style={boldLinksStyle}>教师</NavLink>
            <NavLink to={'./teachers'} style={normalLinksStyle}>陈教师</NavLink>
            <NavLink to={'./teachers'} style={normalLinksStyle}>王教师</NavLink>
        </div>
        <div style={itemStyle}>
            <NavLink to={'./classes'} style={boldLinksStyle}>课程</NavLink>
            <NavLink to={'./classes'} style={normalLinksStyle}>Lego搭建</NavLink>
            <NavLink to={'./classes'} style={normalLinksStyle}>机器人</NavLink>
        </div>
        <div style={itemStyle}>
            <NavLink to={'./championship'} style={boldLinksStyle}>比赛</NavLink>
            <NavLink to={'./championship'} style={normalLinksStyle}>Robocup新西兰赛</NavLink>
            <NavLink to={'./championship'} style={normalLinksStyle}>Robocup澳洲赛</NavLink>
            <NavLink to={'./championship'} style={normalLinksStyle}>Robocup国际赛</NavLink>
        </div>
    </>
);

const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    height: FOOTER_HEIGHT,
};

const boxStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
};

const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const boldLinksStyle = {
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '0',
    margin: '0.8rem 1rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
};

const normalLinksStyle = {
    color: 'white',
    textDecoration: 'none',
    textAlign: 'left',
    padding: '0',
    margin: '0rem 0rem',
    lineHeight: '1.8rem',
    fontSize: '0.7rem',
    fontWeight: 'bold',
};

const qrStyle = {
    width: '60px',
    height: 'auto',
    margin: '1.2rem 0rem',
};
export default Footer;