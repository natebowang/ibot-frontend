import React, {useState} from "react";
import Radium from "radium";
import award0 from '../../images/award1.jpg';
import award1 from '../../images/award2.jpg';
import award2 from '../../images/award3.jpg';

/**
 * Image carousel/slideshow
 * @param items - Array of images
 * @param widths - Image widths array, as same length as the array of images.
 * @returns {JSX}
 */
const Carousel = Radium(({items, widths}) => {
    const itemsLength = items.length;
    const itemsWidth = widths.reduce((a, b) => a + b) + itemsLength * 2 * itemPadding;
    const containerStartPosition = -widths[itemsLength - 1] / 2 - 10;
    const containerStopPosition = containerStartPosition - itemsWidth;

    // todo: The extended items length should be calculated, not asserted.
    const itemsExtended = [items[itemsLength - 1], ...items, ...items, ...items, ...items];

    const [containerStyle, setContainerStyle] = useState({
        ...containerStyleBasic,
        animationName: leftSlide(containerStartPosition, containerStopPosition),
        transform: `translate(${containerStartPosition}px, 0)`,
    });
    // const [ifPaused, setIfPaused] = useState(false);
    // const touchStartHandler = (e) => {
    //     setContainerStyle({
    //         ...containerStyle,
    //         animationPlayState: ifPaused ? 'running' : 'paused',
    //     });
    //     setIfPaused(!ifPaused);
    // };
    // const mouseEnterHandler = (e) => {
    //     setContainerStyle({
    //         ...containerStyle,
    //         animationPlayState: 'paused',
    //     });
    // };
    // const mouseLeaveHandler = (e) => {
    //     e.preventDefault();
    //     setContainerStyle({
    //         ...containerStyle,
    //         animationPlayState: 'running',
    //     });
    //     console.log(containerStyle);
    // };
    const aniEndHandler = () => {
        setContainerStyle({
            ...containerStyleBasic,
            transform: `translate(${containerStartPosition}px, 0)`,
        })
    };

    return (
        <div>
            <div id={'displayWindow'} style={windowStyle}
                // onTouchStart={touchStartHandler}
                // onTouchEnd={touchEndHandler}
                // onTouchCancel={touchEndHandler}
                // onMouseEnter={mouseEnterHandler}
                // onMouseLeave={mouseLeaveHandler}
            >
                <div style={containerStyle} onAnimationEnd={aniEndHandler}>
                    {itemsExtended.map((Item, i) => (
                            <div style={itemStyle} key={i}>
                                <Item/>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
});

const windowStyle = {
    overflow: 'hidden',
    width: '100%',
};

const itemPadding = 10; // in px
const itemStyle = {
    padding: itemPadding + 'px',
};

const leftSlide = (start, end) => Radium.keyframes({
    from: {
        transform: `translate(${start}px, 0)`, // -405
    },
    to: {
        transform: `translate(${end}px, 0)`, // -915
    },
});

const containerStyleBasic = {
    display: 'flex',
    alignItems: 'center',
    animationDuration: '20s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    // userSelect: 'none', // Prevent to select some text and pop up a menu
    animationPlayState: 'running',
};

export default Carousel;

const makeItem = (imgSrc, imgWidth) => () => {
    return (
        <img alt='' src={imgSrc} style={{...imgStyle, width: imgWidth + 'px'}}/>
    )
};

const imgStyle = {
    backgroundColor: '#FFFAEE',
    height: 'auto',
    objectFit: 'cover',
};

const widths = [170, 230, 200]; // in px

export const CarouselExample = () => (
    <Carousel items={[
        makeItem(award0, widths[0]),
        makeItem(award1, widths[1]),
        makeItem(award2, widths[2]),
    ]} widths={widths}/>
);

