import testRenderer from 'react-test-renderer';
import React from "react";
import NavBar from "./NavBar";
import {Provider} from "react-redux";
import store from "../../store/store";
import {BrowserRouter} from "react-router-dom";
import {StyleRoot} from "radium";
import WindowResizeHandler from "../WindowResizeHandler/WindowResizeHandler";

const {act} = testRenderer;

const renderer = testRenderer.create(
    <Provider store={store}>
        <BrowserRouter>
            <StyleRoot>
                <WindowResizeHandler/>
                <NavBar/>
            </StyleRoot>
        </BrowserRouter>
    </Provider>
);

test("Desktop navigation bar snapshot test", () => {
    act(() => {
        window.innerWidth = 1024;
        window.dispatchEvent(new Event('resize'));
    });

    let tree = renderer.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Mobile navigation bar fold list snapshot test", () => {
    act(() => {
        window.innerWidth = 300;
        window.dispatchEvent(new Event('resize'));
    });

    let tree = renderer.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Mobile navigation bar unfold list snapshot test", () => {
    act(() => {
        const button = renderer.root.find(el => {
            return el.type === 'button'
        });
        button.props.onClick(new Event(''))
    });

    let tree = renderer.toJSON();
    expect(tree).toMatchSnapshot();
});
