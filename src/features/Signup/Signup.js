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
import {selectSignupErrorMessage, signup, updateSignupErrorMessage} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import {BiShow, BiHide} from 'react-icons/bi';
import * as emailValidator from 'email-validator';
import PasswordValidator from "password-validator";
import wrongPasswordFormatMsgGenerator from "../../store/wrongPasswordFormatMsgGenerator";

let passwordValidator = new PasswordValidator();
passwordValidator.is().min(6)             // Minimum length 6
    .is().max(50)                         // Maximum length 50
    .has().digits()                             // Must have digit
    .has().symbols()                            // Must have symbols
    .has().not().spaces();                      // Should not have spaces

const Signup = Radium(() => {
    const [userNamePassword, setUserProfile] = useState({username: '', password: ''});
    const [isShowPassword, setIsShowPassword] = useState(false);
    const dispatch = useDispatch();
    const signupErrorMessage = useSelector(selectSignupErrorMessage);

    const handleChange = (e) => {
        e.preventDefault();
        setUserProfile({
            ...userNamePassword,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailValidateResult = emailValidator.validate(userNamePassword.username);
        const passwordValidationResultArray
            = passwordValidator.validate(userNamePassword.password, {list: true});

        if (emailValidateResult && passwordValidationResultArray.length === 0) {
            dispatch(signup(userNamePassword));
        } else {
            let wrongUsernameFormatMsg = '';
            let wrongPasswordFormatMsg = '';
            if (!emailValidateResult) {
                // wrongUsernameFormatMsg = 'That doesn\'t look like an email address. ';
                wrongUsernameFormatMsg = '不符合电子邮件地址格式。';
            }
            if (passwordValidationResultArray.length !== 0) {
                wrongPasswordFormatMsg = wrongPasswordFormatMsgGenerator(passwordValidationResultArray);
            }
            dispatch(updateSignupErrorMessage({
                wrongUsernameFormat: wrongUsernameFormatMsg,
                wrongPasswordFormat: wrongPasswordFormatMsg,
            }));
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsShowPassword(!isShowPassword);
    };

    const handleFocus = (e) => {
        e.preventDefault();
        // add validator
    };

    return (
        <>
            <NavBar/>
            <Main>
                <Section style={signupPaneStyle}>
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <h3>
                            {/*Sign up*/}
                            注册
                        </h3>
                        <label htmlFor={'username'}
                               style={{
                                   marginTop: '2rem',
                                   marginBottom: '0.5rem',
                               }}>
                            {/*Email*/}
                            电子邮箱
                        </label>
                        <input name={'username'}
                               style={{
                                   marginBottom: '0.4rem',
                                   lineHeight: '1.6rem',
                                   padding: '2px 6px',
                               }}
                               value={userNamePassword.username}
                               onChange={handleChange}
                               onFocus={handleFocus}
                        />
                        <p style={{
                            margin: '0 2px 3rem 2px',
                            fontSize: '0.8rem',
                            color: 'red',
                        }}>
                            {signupErrorMessage.wrongUsernameFormat ?
                                signupErrorMessage.wrongUsernameFormat : null}
                        </p>
                        <label htmlFor={'password'}
                               style={{
                                   marginBottom: '0.5rem',
                               }}>
                            {/*Password*/}
                            密码
                        </label>
                        <div style={{position: 'relative'}}>
                            <input name={'password'}
                                   type={isShowPassword ? 'text' : 'password'}
                                   style={{
                                       marginBottom: '0.4rem',
                                       lineHeight: '1.6rem',
                                       width: '100%',
                                       fontFamily: isShowPassword ? 'inherit' : 'sans-serif',
                                       fontSize: isShowPassword ? 'inherit' : '0.8rem',
                                       letterSpacing: isShowPassword ? 'normal' : '3px',
                                       padding: '2px 6px',
                                   }}
                                   value={userNamePassword.password}
                                   onChange={handleChange}
                                   onFocus={handleFocus}
                            />
                            {isShowPassword ?
                                <BiHide style={iconStyle} onClick={handleClick}/> :
                                <BiShow style={iconStyle} onClick={handleClick}/>
                            }
                        </div>
                        <p style={{
                            margin: '0 2px 0.4rem 2px',
                            fontSize: '0.8rem',
                            color: 'red',
                        }}>
                            {signupErrorMessage.wrongPasswordFormat ?
                                signupErrorMessage.wrongPasswordFormat : null}
                        </p>
                        <p style={{
                            margin: '0 2px 3rem 2px',
                            fontSize: '0.8rem',
                        }}>
                            {/*6+ characters. At least 1 digit and 1 symbol.*/}
                            包含6个以上字符。至少包含一个数字和一个符号。
                        </p>
                        <Button style={{
                            backgroundColor: PRIMARY_COLOR,
                            marginBottom: '3rem',
                        }}>
                            {/*Sign up*/}
                            注册
                        </Button>
                    </form>
                </Section>
            </Main>
            <Footer/>
        </>
    )
});

const iconStyle = {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem'
};

const signupPaneStyle = {
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

export default Signup;
