import React  from 'react';
import {Provider} from "react-redux";

import './App.css';
import store from "../store/store";
import {BrowserRouter} from "react-router-dom";
import {StyleRoot} from "radium";

import WindowResizeHandler from "../components/WindowResizeHandler/WindowResizeHandler";
// import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

/**
 * Root component.
 */
const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StyleRoot>
                    <WindowResizeHandler/>
                    <Footer/>
                </StyleRoot>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

export default App;
