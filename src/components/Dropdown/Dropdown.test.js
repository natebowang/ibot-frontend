import React from "react";
import TestRenderer from 'react-test-renderer';
import {DropdownExample} from "./Dropdown";

test('Dropdown menu snapshot test', () => {
    const dropdown = TestRenderer.create(
        <DropdownExample/>
    );

    const tree = dropdown.toJSON();
    expect(tree).toMatchSnapshot(tree);
});

