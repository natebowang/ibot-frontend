import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        avatar: null,
        incorrectUsernamePwdFlag: false,
    },
    reducers: {
        updateUserProfile: (state, action) => {
            state.username = action.payload.username;
            state.avatar = action.payload.avatar;
        },
        updateIncorrectUsernamePwdFlag: (state, action) => {
            state.incorrectUsernamePwdFlag = action.payload.incorrectUsernamePwdFlag;
        }
    }
});

export const {updateUserProfile, updateIncorrectUsernamePwdFlag} = userSlice.actions;
export const userReducer = userSlice.reducer;

export const login = (userProfile) => async (dispatch) => {
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

export const signup = (userProfile) => async (dispatch) => {
    const response = await fetch('./api/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfile),
    });
    const message = await response.json();
    if (response.ok) {
        console.log(message);
    } else {
        console.log('error');
    }
};
export const selectUsername = state => state.user.username;
export const selectAvatar = state => state.user.avatar;
export const selectIncorrectUsernamePwdFlag = state => state.user.incorrectUsernamePwdFlag;

