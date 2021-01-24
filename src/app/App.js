import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectWiw, updateWiw} from "../store/appSlice";

import './App.css';
import {TestButton} from "../components/Button/Button";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <TestButton/>
        </div>
    );
};

export default App;
