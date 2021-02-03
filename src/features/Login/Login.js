import React, {useState} from "react";
import NavBar from "../../components/NavBar/NavBar";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import {DESKTOP_PORTRAIT_MEDIA_QUERY} from "../../app/config";
import Radium from "radium";

const Login = Radium(() => {
    const [user, setUser] = useState({username: '', password: ''});

    const handleChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let response = await fetch('./user.json', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // });
        let response = await fetch('./user.json');
        const message = await response.json();
        if (response.ok) {
            console.log(message.username);
        } else {
            console.log('error');
        }
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
                               value={user.username}
                               onChange={handleChange}
                        />
                        <label htmlFor={'password'} style={{...itemStyle}}>
                            Password
                        </label>
                        <input name={'password'}
                               style={{...itemStyle}}
                               value={user.password}
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
