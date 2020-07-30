import React, {useCallback} from "react";
import LoginForm from "./loginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/loginRedux";
import {NavLink, Redirect} from "react-router-dom";
import {FORGOT_PATH, PROFILE_PATH, REGISTRATION_PATH} from "../routes";
import Preloader from "../common/preloader";

const LoginPage = (props)=>{
    const dispatch=useDispatch();
    const {success, isLoading,error, isDisabled}=useSelector((store)=>{
        return store.login
    });
    const onSubmit = useCallback( (email, password, rememberMe)=>
    {
        // if(){
        //
        // }
        dispatch(login(email, password, rememberMe))
    }, [dispatch]);



   if (isLoading){ return <Preloader/> }
    if(success){
        return <Redirect to={PROFILE_PATH}/>
    }

   return (
        <div>
           <h2> LOGIN </h2>
            <LoginForm {...props} onSubmit ={onSubmit} isDisabled={isDisabled} error ={error} />
            <NavLink to={FORGOT_PATH}>Forgot Password</NavLink>
            <NavLink to={REGISTRATION_PATH}>Registration</NavLink>
        </div>
    )
};

export default LoginPage