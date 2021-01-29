import React from 'react';
import {Provider} from "react-redux";

import './App.css';
import store from "../store/store";
import {BrowserRouter} from "react-router-dom";
import {StyleRoot} from "radium";

import WindowResizeHandler from "../components/WindowResizeHandler/WindowResizeHandler";
// import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import NavBar from "../components/NavBar/NavBar";
import Section from "../components/Section/Section";
import {CarouselExample} from "../components/Carousel/Carousel";

/**
 * Root component.
 */
const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StyleRoot>
                    <WindowResizeHandler/>
                    <NavBar/>
                    <Main>
                        <Section bkImg={true}>
                            <CarouselExample></CarouselExample>
                        </Section>
                    </Main>
                    <Footer/>
                </StyleRoot>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

export default App;
