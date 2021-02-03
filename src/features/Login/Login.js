import React, {useState} from "react";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import {DESKTOP_PORTRAIT_MEDIA_QUERY} from "../../app/config";
import Radium from "radium";
import {login} from "../../store/userSlice";
import {useDispatch} from "react-redux";

const Login = Radium(() => {
    const [userProfile, setUserProfile] = useState({username: '', password: ''});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        setUserProfile({
            ...userProfile,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(userProfile));
    };

    return (
        <>
            <NavBar/>
            <Main>
                <section style={loginWindowStyle}>
                    <h3>
                        Login
                    </h3>
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <label htmlFor={'username'} style={{...itemStyle}}>
                            username
                        </label>
                        <input name={'username'}
                               style={{...itemStyle}}
                               value={userProfile.username}
                               onChange={handleChange}
                        />
                        <label htmlFor={'password'} style={{...itemStyle}}>
                            Password
                        </label>
                        <input name={'password'}
                               style={{...itemStyle}}
                               value={userProfile.password}
                               onChange={handleChange}
                        />
                        <button style={{...itemStyle}}>
                            Login
                        </button>
                    </form>
                </section>
            </Main>
            <Footer/>
        </>
    )
});

const loginWindowStyle = {
    backgroundColor: 'yellow',
    padding: '1rem',
    height: '100%',
    [DESKTOP_PORTRAIT_MEDIA_QUERY]: {
        backgroundColor: 'red',
    }
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const itemStyle = {
    margin: '0.5rem 0'
};

export default Login;
