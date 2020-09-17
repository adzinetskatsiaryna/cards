import React, {useState} from "react";
import ForgotForm from "./ForgotForm";
import {LOGIN_PATH, SET_NEW_PASSWORD_PATH} from "../routes";
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {forgotPassword, forgotSuccess} from "../../redux/forgotReducer";
import Preloader from "../common/preloader";
import s from './forgot.module.css';

const ForgotPage = (props)=>{


    const onSubmitForgot=(email)=>{
        props.forgotPassword(email)
    };


    if(props.isLoading){
        return <Preloader/>
    }

    {
        if (props.success) {
            return <div className={s.modal}>Follow  the link on your e-mail page </div>
        }
    }

    return (
        <div>
            <h2>FORGOT</h2>

            <ForgotForm onSubmitForgot={onSubmitForgot} disabled={props.isDisabled} />
            <NavLink to={LOGIN_PATH}>Login</NavLink>
            <div>{props.error}</div>
        </div>
    )
};

const mapStateToProps = (state)=>({
    success: state.forgot.success,
    isLoading: state.forgot.isLoading,
    isDisabled: state.forgot.isDisabled,
    error: state.forgot.error
});

export default connect(mapStateToProps, {forgotPassword, forgotSuccess})(ForgotPage)