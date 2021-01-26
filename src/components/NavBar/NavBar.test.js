import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from "react";

test("Primary button snapshot test", () => {
    const button = renderer.create(
    );

    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
});
