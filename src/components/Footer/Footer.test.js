import React from "react";
import TestRenderer from 'react-test-renderer';
import Footer from "./Footer";
import {Provider} from "react-redux";
import store from "../../store/store";
import {BrowserRouter} from "react-router-dom";
import {StyleRoot} from "radium";
import WindowResizeHandler from "../WindowResizeHandler/WindowResizeHandler";

const {act} = TestRenderer;

const footer = TestRenderer.create(
    <Provider store={store}>
        <BrowserRouter>
            <StyleRoot>
                <WindowResizeHandler/>
                <Footer/>
            </StyleRoot>
        </BrowserRouter>
    </Provider>
);

test('Desktop footer component snapshot test', () => {
    act(() => {
        window.innerWidth = 1024;
        window.dispatchEvent(new Event('resize'));
    });
    const tree = footer.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Mobile footer component snapshot test', () => {
    act(() => {
        window.innerWidth = 300;
        window.dispatchEvent(new Event('resize'));
    });
    const tree = footer.toJSON();
    expect(tree).toMatchSnapshot();
});
