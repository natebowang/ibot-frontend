import React, {useState, useEffect, useCallback} from "react";
import Button from "../Button/Button";

/**
 * Dropdown menu
 * @param {Component} toggleButtonIcon - An arrow or an list button
 * @param {style} toggleButtonStyle
 * @param children - the list to be open or closed
 * @returns {*}
 */
const Dropdown = ({toggleButtonIcon, toggleButtonStyle, children}) => {
    const [ifOpen, setIfOpen] = useState(false);

    const windowClickHandler = useCallback((e) => {
        e.preventDefault();
        setIfOpen(false);
        window.removeEventListener('click', windowClickHandler);
    }, []);

    useEffect(() => {
        return () => {
            window.removeEventListener('click', windowClickHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleHandler = (e) => {
        e.preventDefault();
        switch (ifOpen) {
            case true:
                setIfOpen(!ifOpen);
                window.removeEventListener('click', windowClickHandler);
                break;
            case false:
                setIfOpen(!ifOpen);
                setTimeout(() => {
                    window.addEventListener('click', windowClickHandler);
                }, 0);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Button
                onClick={toggleHandler}
                style={toggleButtonStyle}
            >
                {toggleButtonIcon}
            </Button>
            {ifOpen ? children : null}
        </div>
    );
};

export default Dropdown;

export const DropdownExample = () => (
    <Dropdown
        toggleButtonIcon={<div>v</div>}
        toggleButtonStyle={toggleButtonStyle}
    >
        <ul style={ulStyle}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </Dropdown>
);

const toggleButtonStyle = {
    backgroundColor: 'green',
};

const ulStyle = {
    background: 'yellow',
    margin: '0',
};
