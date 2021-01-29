import React from "react";
import {create} from 'react-test-renderer'
import {CarouselExample} from "./Carousel";
import {StyleRoot} from "radium";

// todo: test the animation.
test('',()=>{
    const carouse = create(
        <StyleRoot>
            <CarouselExample/>
        </StyleRoot>
    );

    const tree = carouse.toJSON();
    expect(tree).toMatchSnapshot();
});