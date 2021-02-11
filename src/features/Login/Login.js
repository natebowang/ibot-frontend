import React, {useState} from "react";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import {
    DESKTOP_PORTRAIT_MEDIA_QUERY,
    PRIMARY_COLOR,
    SECONDARY_COLOR
} from "../../app/config";
import Radium from "radium";
import {login} from "../../store/userSlice";
import {useDispatch} from "react-redux";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";

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
                <Section style={loginPaneStyle}>
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <h3>
                            Log in
                        </h3>
                        <label htmlFor={'username'}
                               style={{
                                   marginTop: '2rem',
                                   marginBottom: '0.5rem',
                               }}>
                            Email
                        </label>
                        <input name={'username'}
                               style={{
                                   marginBottom: '3rem',
                                   lineHeight: '1.6rem',
                               }}
                               value={userProfile.username}
                               onChange={handleChange}
                        />
                        <label htmlFor={'password'}
                               style={{
                                   marginBottom: '0.5rem',
                               }}>
                            Password
                        </label>
                        <input name={'password'}
                               style={{
                                   marginBottom: '3rem',
                                   lineHeight: '1.6rem',
                               }}
                               value={userProfile.password}
                               onChange={handleChange}
                        />
                        <Button style={{
                            backgroundColor: PRIMARY_COLOR,
                            marginBottom: '0.8rem',
                        }}>
                            Log in
                        </Button>
                        <p style={{
                            margin: '0 2px 3rem 2px',
                            fontSize: '0.8rem',
                        }}>
                            <Link to={'/signup'} style={{textDecoration: 'none', color: 'black'}}>
                                还未加入？点击注册
                            </Link>
                        </p>
                    </form>
                </Section>
            </Main>
            <Footer/>
        </>
    )
});

const loginPaneStyle = {
    backgroundColor: SECONDARY_COLOR,
    padding: '3rem',
    [DESKTOP_PORTRAIT_MEDIA_QUERY]: {
        backgroundColor: 'transparent',
    }
};

const formStyle = {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    [DESKTOP_PORTRAIT_MEDIA_QUERY]: {
        padding: '3rem',
        maxWidth: '600px',
        backgroundColor: SECONDARY_COLOR,
    }
};

export default Login;
