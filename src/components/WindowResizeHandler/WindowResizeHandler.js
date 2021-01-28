import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {updateWiw} from "../../store/appSlice";

/**
 * Window resize event handler component. It updates store when window resized.
 */
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