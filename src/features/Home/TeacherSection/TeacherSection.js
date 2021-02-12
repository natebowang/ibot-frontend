import React from 'react';
import Section from "../../../components/Section/Section";
import WJImg from "./wj.png";
import CXImg from "./cx.png";
import {DESKTOP_PORTRAIT_MEDIA_QUERY} from "../../../app/config";

const TeacherSection = () => {
    return (
        <Section bkImg={true}>
            <div style={boxStyle}>
                <div style={itemStyle}>
                    <img src={CXImg} alt={'陈老师'} style={imageStyle}/>
                    <h3 style={titleStyle}>陈老师</h3>
                    <p style={contentStyle}>
                        北京顶尖中学—北师大附属实验中学乐高机器人教学资深老师亲自授课，
                        告诉你乐高不仅仅可以用来玩，还可以学习各种力学、机械、电脑、
                        控制等科学知识，最终全方位了解机器人结构、搭建设计、电脑控制、
                        传感器检测和创新思维。
                    </p>
                </div>
                <div style={itemStyle}>
                    <img src={WJImg} alt={'王老师'} style={imageStyle}/>
                    <h3 style={titleStyle}>王老师</h3>
                    <p style={contentStyle}>
                        我们在新西兰开办乐高机器人教学已经四年多，先后有近60名学生接受培训，
                        经过一年到一年半的培训，学生们就可以参加比赛了。
                    </p>

                </div>
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

export default TeacherSection;