import React from "react";
import Radium from "radium";
import Section from "../../../components/Section/Section";
import Carousel from "../../../components/Carousel/Carousel";
import {DESKTOP_PORTRAIT_MEDIA_QUERY} from "../../../app/config";
import a0 from './awards/2019 AUCKLAND 1th - Aiston - Premier-page-001.jpg';
import a1 from './awards/2019 AUCKLAND 1th - Eddy - Junior-page-001.jpg';
import a2 from './awards/2019 AUCKLAND 1th - Fiona - Senior-page-001.jpg';
import a3 from './awards/2019 AUCKLAND 1th - Kenneth - Junior-page-001.jpg';
import a4 from './awards/2019AUS_P9.jpg'; // 400
import a5 from './awards/20191013_155913.jpg'; // 150
import a6 from './awards/20191013_160726.jpg'; // 150
import a7 from './awards/IMG_3346.JPG';
import a8 from './awards/IMG_3347.JPG';
import a9 from './awards/mmexport1530403656845.jpg';
import a10
    from './awards/Robocup Junior Nationals Competition 2018_15 September 2018_Senior Rescue_First-page-001.jpg';
import a11
    from './awards/Robocup Junior Nationals Competition 2018_15 September 2018_Senior Rescue_First-page-001 (1).jpg';
import a12
    from './awards/Robocup Junior Nationals Competition 2019_14 September 2019_Senior Rescue_First-page-001.jpg';
import a13
    from './awards/Robocup Junior Nationals Competition 2019_14 September 2019_Senior Rescue_Second-page-001.jpg';
import steer from "./steer.svg";
import speaker from "./speaker.svg";

const makeItem = (imgSrc, imgWidth) => () => {
    return (
        <img alt='' src={imgSrc} style={{...imgStyle, width: imgWidth + 'px'}}/>
    )
};

const imgStyle = {
    backgroundColor: 'red',
    height: 'auto',
    objectFit: 'cover',
    // filter: 'brightness(50%)',
};

const widths = [200, 200, 200, 200,
    400, 150, 150, 300, 300, 300,
    200, 200, 200, 200]; // in px

const AwardSection = () => {
    return (
        <Section bkImg={true}>
            <div style={divStyle}>
                <div style={boxStyle}>
                    <div style={itemStyle}>
                        <img src={speaker} alt={'Robocup澳洲赛'} style={imageStyle}/>
                        <h3 style={titleStyle}>Robocup澳洲赛</h3>
                        <p style={contentStyle}>
                            新西兰本地和世界接轨的乐高机器人的比赛主要有两类，一类是FLL（第一乐高联赛，First Lego Leage），另一类是Robocup
                            Junior。 我们的比赛班教学以Robocup Junior为主。在Robocup
                            Junior比赛中，又分为Rescue、Theatre和Soccer三种类型的机器人比赛。我们主要教授其中的Rescue比赛。
                        </p>
                        <p style={contentStyle}>
                            如果希望参加FLL（第一乐高联赛，First Lego Leage）比赛的学生培训时间为1年或5个季度，视训练结果而定。
                        </p>
                    </div>

                    <div style={itemStyle}>
                        <img src={steer} alt={'Robocup国际赛'} style={imageStyle}/>
                        <h3 style={titleStyle}>Robocup国际赛</h3>
                        <p style={contentStyle}>
                            无论参加哪种比赛，学生均需要自己配备电脑和乐高机器人一套
                        </p>
                        <p style={contentStyle}>
                            通过iBot乐高机器人培训的学生，可以进一步参加其他IT课程学习，当学会Arduino-DIY机器人或者Raspberry
                            Pi-DIY机器人后，仍然可以参加Robocup Junior中的Rescue比赛， 该比赛鼓励使用DIY机器人！
                        </p>
                    </div>
                </div>
                <Carousel items={[
                    makeItem(a0, widths[0]),
                    makeItem(a1, widths[1]),
                    makeItem(a2, widths[2]),
                    makeItem(a3, widths[3]),
                    makeItem(a4, widths[4]),
                    makeItem(a5, widths[5]),
                    makeItem(a6, widths[6]),
                    makeItem(a7, widths[7]),
                    makeItem(a8, widths[8]),
                    makeItem(a9, widths[9]),
                    makeItem(a10, widths[10]),
                    makeItem(a11, widths[11]),
                    makeItem(a12, widths[12]),
                    makeItem(a13, widths[13]),
                ]} widths={widths}/>
            </div>
        </Section>
    )
};

const boxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '1rem',
    [DESKTOP_PORTRAIT_MEDIA_QUERY]: {
        padding: '2rem',
    }
};

const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexBasis: '100%',
    '@media (min-width: 600px)': {
        flexBasis: '50%',
    },
};

const imageStyle = {
    display: 'block',
    width: '5rem',
    borderRadius: '50%',
    margin: '1rem',
};

const titleStyle = {
    textAlign: 'center',
    padding: '0',
    margin: '0.8rem 1rem',
    fontSize: '1.1rem'
};

const contentStyle = {
    textAlign: 'center',
    padding: '0',
    margin: '0.8rem 1.5rem',
    lineHeight: '1.8rem',
    fontSize: '0.9rem'
};

const divStyle = {
    padding: '1rem 0',
    [DESKTOP_PORTRAIT_MEDIA_QUERY]: {
        padding: '2rem 0',
    }
};

export default Radium(AwardSection);