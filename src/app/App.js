import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectWiw, updateWiw} from "../store/appSlice";

import './App.css';

/**
 * Root component.
 */
const App = () => {
    const dispatch = useDispatch();
    const wiw = useSelector(selectWiw);

    const windowResizeHandler = (e) => {
        dispatch(updateWiw());
    };

    useEffect(() => {
        window.addEventListener("resize", windowResizeHandler);
        return () => {
            window.removeEventListener("resize", windowResizeHandler)
        };
    }, []);

    return (
        <div>
            {wiw}
        </div>
    );
};

export default App;
