import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from "react";
import {TestButton} from "./Button";

test("Primary button snapshot test", () => {
    const button = renderer.create(
        <TestButton/>
    );

    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
});
