import React from 'react';
import {Provider} from "react-redux";

import './App.css';
import store from "../store/store";
import {BrowserRouter} from "react-router-dom";
import {StyleRoot} from "radium";

import WindowResizeHandler from "../components/WindowResizeHandler/WindowResizeHandler";
import Router from "./Router";

/**
 * Root component.
 */
const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <StyleRoot>
                        <WindowResizeHandler/>
                        <Router/>
                    </StyleRoot>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    )
};

export default App;
