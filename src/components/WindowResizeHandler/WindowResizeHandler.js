import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {updateWiw} from "../../store/appSlice";

const WindowResizeHandler = () => {
    const dispatch = useDispatch();

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

    return null;
};

export default WindowResizeHandler;