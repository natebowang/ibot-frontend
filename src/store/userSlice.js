import {createSlice} from "@reduxjs/toolkit";
import wrongPasswordFormatMsgGenerator from "./wrongPasswordFormatMsgGenerator";
import xss from "xss";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userProfile: {
            username: '',
            email: '',
            phone: null,
            avatar: null,
            user_state: 1
        },
        loginErrorMessage: {
            wrongUsernameFormat: '',
            wrongPasswordFormat: '',
        },
        signupErrorMessage: {
            wrongUsernameFormat: '',
            wrongPasswordFormat: '',
        },
    },
    reducers: {
        updateUserProfile: (state, action) => {
            state.userProfile = {
                ...state.userProfile,
                ...action.payload,
            };
            state.loginErrorMessage = {
                wrongUsernameFormat: '',
                wrongPasswordFormat: '',
            };
            state.signupErrorMessage = {
                wrongUsernameFormat: '',
                wrongPasswordFormat: '',
            };
        },
        updateLoginErrorMessage: (state, action) => {
            state.loginErrorMessage = {
                ...state.loginErrorMessage,
                ...action.payload
            };
        },
        updateSignupErrorMessage: (state, action) => {
            state.signupErrorMessage = {
                ...state.signupErrorMessage,
                ...action.payload
            };
        },
    }
});

export const {updateUserProfile, updateLoginErrorMessage, updateSignupErrorMessage} = userSlice.actions;
export const userReducer = userSlice.reducer;

export const login = (userNamePassword) => async (dispatch) => {
    // const response = await fetch('./user.json', {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userProfile),
    // });
    const response = await fetch('./user.json');
    const message = await response.json();
    if (response.ok) {
        console.log(message);
    } else {
        console.log('error');
    }
};

export const signup = (userNamePassword) => async (dispatch) => {
    const response = await fetch('./api/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: xss(userNamePassword.username),
            password: userNamePassword.password
        }),
    });
    const body = await response.json();
    if (response.ok) {
        dispatch(updateUserProfile(body));
    } else {
        // console.log(body);
        let wrongUsernameFormatMsg = '';
        let wrongPasswordFormatMsg = '';
        if (body.userExists) {
            // wrongUsernameFormatMsg = 'User exists. ';
            wrongUsernameFormatMsg = '用户已存在。';
        }
        if (body.wrongUsernameFormat) {
            // wrongUsernameFormatMsg = 'That doesn\'t look like an email address. ';
            wrongUsernameFormatMsg = '不符合电子邮件地址格式。';
        }
        if (body.wrongPasswordFormat) {
            wrongPasswordFormatMsg = wrongPasswordFormatMsgGenerator(body.passwordValidationResultArray);
        }
        dispatch(updateSignupErrorMessage({
            wrongUsernameFormat: wrongUsernameFormatMsg,
            wrongPasswordFormat: wrongPasswordFormatMsg,
        }));
    }
};

export const selectUserProfile = state => state.user.userProfile;
export const selectLoginErrorMessage = state => state.user.loginErrorMessage;
export const selectSignupErrorMessage = state => state.user.signupErrorMessage;

