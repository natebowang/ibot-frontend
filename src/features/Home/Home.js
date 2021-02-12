import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import HeadVideoSection from "./HeadVideoSection/HeadVideoSection";
import TeacherSection from "./TeacherSection/TeacherSection";
import ClassSection from "./ClassesSection/ClassSection";
import AwardSection from "./AwardSection/AwardSection";

const Home = () => (
    <>
        <NavBar/>
        <Main>
            <HeadVideoSection/>
            <TeacherSection/>
            <ClassSection/>
            <AwardSection/>
        </Main>
        <Footer/>
    </>
);

export default Home;
