import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import HeadVideoSection from "./HeadVideoSection/HeadVideoSection";

const Home = () => (
    <>
        <NavBar/>
        <Main>
            <HeadVideoSection/>
            <h3 style={{textAlign: 'center', lineHeight: '10rem'}}>
                This page is under construction.
            </h3>
        </Main>
        <Footer/>
    </>
);

export default Home;
