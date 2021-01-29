import React from "react";
import {create} from 'react-test-renderer';
import Section from "./Section";

test('Section without background image snapshot test', () => {
    const section = create(
        <Section/>
    );
    const tree = section.toJSON();
    expect(tree).toMatchSnapshot()
});

test('Section with background image snapshot test', () => {
    const section = create(
        <Section bkImg={true}/>
    );
    const tree = section.toJSON();
    expect(tree).toMatchSnapshot()
});
