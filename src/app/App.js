import React from 'react';
import {Provider} from "react-redux";

import './App.css';
import store from "../store/store";
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router';
import {StyleRoot} from "radium";

import Home from "../features/Home/Home";
import WindowResizeHandler from "../components/WindowResizeHandler/WindowResizeHandler";
import Login from "../features/Login/Login";
import Signup from "../features/Signup/Signup";
import Dashboard from "../features/Dashboard/Dashboard";
import Teachers from "../features/Teachers/Teachers";
import Championship from "../features/Championship/Championship";
import Classes from "../features/Classes/Classes";

/**
 * Root component.
 */
const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StyleRoot>
                    <WindowResizeHandler/>
                    <Route exact path={'/'}><Home/></Route>
                    <Route path={'/login'}><Login/></Route>
                    <Route path={'/signup'}><Signup/></Route>
                    <Route path={'/dashboard'}><Dashboard/></Route>
                    <Route path={'/classes'}><Classes/></Route>
                    <Route path={'/championship'}><Championship/></Route>
                    <Route path={'/teachers'}><Teachers/></Route>
                </StyleRoot>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

export default App;
