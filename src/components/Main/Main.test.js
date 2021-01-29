import React from "react";
import {create} from 'react-test-renderer';
import Main from "./Main";

test('Main component snapshot test', () => {
    const main = create(
        <Main>test</Main>
    );
    const tree = main.toJSON();
    expect(tree).toMatchSnapshot();
});