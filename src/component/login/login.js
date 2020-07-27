import React from "react";
import LoginForm from "./loginForm";
import {connect} from "react-redux";
import {login} from "../../redux/loginRedux";
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, REGISTRATION_PATH} from "../routes";


const LoginPage = (props)=>{

    const onSubmit = (email, password, rememberMe)=>{
        props.login(email, password, rememberMe)
    };

    return (
        <div>
           <h2> LOGIN </h2>
            <LoginForm {...props} onSubmit ={onSubmit} />
            <NavLink to={FORGOT_PATH}>Forgot Password</NavLink>
            <NavLink to={REGISTRATION_PATH}>Registration</NavLink>
        </div>
    )
};
const mapStateToProps = (state)=>({
    email: state.login.email,
    password: state.login.password,
    rememberMe: state.login.rememberMe,
});

export default connect(mapStateToProps, {login})(LoginPage)