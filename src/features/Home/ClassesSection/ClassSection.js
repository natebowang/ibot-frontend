import React from "react";
import {DESKTOP_PORTRAIT_MEDIA_QUERY, PRIMARY_COLOR} from "../../../app/config";
import lego from './Lego.jpg';
import Section from "../../../components/Section/Section";
import Button from "../../../components/Button/Button";

const ClassSection = () => {
    return (
        <Section>
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <img src={lego} alt={'img'} style={imgStyle}/>
                    <h3 style={titleStyle}>乐高搭建课</h3>
                    <p style={contentStyle}>
                        乐高基础班，乐高比赛班、C语言培训班、Arduino培训班、Arduino-DIY机器人比赛班、
                        Python语言培训班、Raspberry Pi培训班和Raspberry Pi-DIY机器人 比赛班。
                    </p>
                    <Button style={buttonStyle}>免费试听</Button>
                </div>
                <div style={cardStyle}>
                    <img src={lego} alt={'img'} style={imgStyle}/>
                    <h3 style={titleStyle}>机器人课</h3>
                    <p style={contentStyle}>
                        乐高基础班，乐高比赛班、C语言培训班、Arduino培训班、Arduino-DIY机器人比赛班、
                        Python语言培训班、Raspberry Pi培训班和Raspberry Pi-DIY机器人 比赛班。
                    </p>
                    <Button style={buttonStyle}>免费试听</Button>
                    {/*<Button variant="primary" style={buttonStyle}>免费试听</Button>*/}
                </div>
            </div>
        </Section>
    )
};

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '1rem',
    [DESKTOP_PORTRAIT_MEDIA_QUERY]: {
        padding: '2rem',
    },
};

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',

    border: '1px solid #DBDBDB',
    borderRadius: '5px',
    margin: '1rem',

    flexBasis: 'calc( 100% - 2rem) ',
    '@media (min-width: 600px)': {
        flexBasis: 'calc( 50% - 2rem) ',
    },

};

const imgStyle = {
    width: '100%',
    marginBottom: '2rem',
};

const titleStyle = {
    textAlign: 'left',
    padding: '0',
    margin: '0.8rem 1rem',
    fontSize: '1.1rem'
};

const contentStyle = {
    textAlign: 'left',
    padding: '0',
    margin: '0.8rem 1rem',
    lineHeight: '1.8rem',
    fontSize: '0.9rem'
};

const buttonStyle = {
    maxWidth: '100%',
    margin: '1rem',
    backgroundColor: PRIMARY_COLOR,
};

export default ClassSection;