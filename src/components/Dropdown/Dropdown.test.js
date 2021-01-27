import React from "react";
import renderer from 'react-test-renderer';
import {DropdownExample} from "./Dropdown";

test('Dropdown menu snapshot test', () => {
    const dropdown = renderer.create(
        <DropdownExample/>
    );

    const tree = dropdown.toJSON();
    expect(tree).toMatchSnapshot(tree);
});

