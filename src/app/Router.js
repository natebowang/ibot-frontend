import React from "react";
import {Route} from "react-router";
import {Redirect} from "react-router-dom";
import Home from "../features/Home/Home";
import Login from "../features/Login/Login";
import Signup from "../features/Signup/Signup";
import Dashboard from "../features/Dashboard/Dashboard";
import Classes from "../features/Classes/Classes";
import Championship from "../features/Championship/Championship";
import Teachers from "../features/Teachers/Teachers";
import {useSelector} from "react-redux";
import {selectUserProfile} from "../store/userSlice";

const Router = () => {
    const userProfile = useSelector(selectUserProfile);

    return (
        <>
            <Route exact path={'/'}><Home/></Route>
            <Route path={'/login'}>
                {userProfile.username ? <Redirect to={'/dashboard'}/> : <Login/>}
            </Route>
            <Route path={'/signup'}>
                {userProfile.username ? <Redirect to={'/dashboard'}/> : <Signup/>}
            </Route>
            <Route path={'/dashboard'}><Dashboard/></Route>
            <Route path={'/classes'}><Classes/></Route>
            <Route path={'/championship'}><Championship/></Route>
            <Route path={'/teachers'}><Teachers/></Route>
        </>
    )
};

export default Router