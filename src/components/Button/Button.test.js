import TestRenderer from 'react-test-renderer';
import React from "react";
import {ButtonExample} from "./Button";

test("Primary button snapshot test", () => {
    const button = TestRenderer.create(
        <ButtonExample/>
    );

    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
});
