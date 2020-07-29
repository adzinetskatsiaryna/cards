import React, {useCallback} from "react";
import LoginForm from "./loginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/loginRedux";
import {NavLink, Redirect} from "react-router-dom";
import {FORGOT_PATH, PROFILE_PATH, REGISTRATION_PATH} from "../routes";
import preloader from '../../images/preloader.svg';



const LoginPage = (props)=>{
    const dispatch=useDispatch()
    const {success, isLoading,error, isDisabled}=useSelector((store)=>{
        return store.login
    })

    const onSubmit = useCallback( (email, password, rememberMe)=>
    {
        // if(){
        //
        // }
        dispatch(login(email, password, rememberMe))
    }, [dispatch]);




     if(success){
         return <Redirect to={PROFILE_PATH}/>
     }

    return (
        isLoading ? <div><img src={preloader}/> </div>:
        <div>
           <h2> LOGIN </h2>
            <LoginForm {...props} onSubmit ={onSubmit} disabled={isDisabled} />
            <NavLink to={FORGOT_PATH}>Forgot Password</NavLink>
            <NavLink to={REGISTRATION_PATH}>Registration</NavLink>
        </div>
    )
};
// const mapStateToProps = (state)=>({
//     email: state.login.email,
//     password: state.login.password,
//     rememberMe: state.login.rememberMe,
// });

export default LoginPage