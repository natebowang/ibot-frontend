import React, {useState} from "react";
import Radium from "radium";

/**
 * Primary button component
 * @type {function(...[*]=)}
 */
const Button = Radium(({style, onClick: clickHandler, children}) => {
    return (
        <button style={{...buttonStyle, ...style}} onClick={clickHandler}>
            {children}
        </button>
    )
});

const buttonStyle = {
    border: 'none',
    borderRadius: '2px',
    padding: '1px 5px',
    cursor: 'pointer',
    // ':hover': {
    //     filter: 'brightness(85%)',
    // },
    ':active': {
        filter: 'brightness(85%)',
    },
    ':focus': {
        border: 'none',
        outline: '0',
        boxShadow: 'none',
    }
};

export default Button;

/**
 * Button component for test
 * @returns {*}
 * @constructor
 */
export const ButtonExample = () => {
    const [counter, setCounter] = useState(0);

    const style = {
        backgroundColor: 'orange',
    };

    const clickHandler = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
    };

    return <Button onClick={clickHandler} style={style}>{counter}</Button>
};
