import React, {useState} from "react";
import ForgotForm from "./ForgotForm";
import {LOGIN_PATH} from "../routes";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {forgotPassword, forgotSuccess} from "../../redux/forgotReducer";

const ForgotPage = (props)=>{


    const onSubmitForgot=(email)=>{
        props.forgotPassword(email)
    };

    return (
        <div>
            <h2>FORGOT</h2>
            <ForgotForm onSubmitForgot={onSubmitForgot} />
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )
};

const mapStateToProps = (state)=>({
    success: state.forgot.success,
})

export default connect(mapStateToProps, {forgotPassword, forgotSuccess})(ForgotPage)