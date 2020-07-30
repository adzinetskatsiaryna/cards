import React from "react";
import RegistrationForm from "./registrationForm";
import {NavLink, Redirect} from "react-router-dom";
import {LOGIN_PATH} from "../routes";
import {connect} from "react-redux";
import {registration, registrationError, registrationSuccess} from "../../redux/registrationRedux";
import Preloader from "../common/preloader";


const RegistrationPage = (props) => {
    const onSubmit = (email, password) => {
        props.registration(email, password)
    };

    const changeEmail = (email) => {
        props.registrationSuccess(email)
    };

    const setError = (error)=>{
        props.registrationError(error)
    };

    if (props.isLoading) {
        return <Preloader/>
    }
    if (props.success) {
       return <Redirect to={LOGIN_PATH}></Redirect>
    }

        return (
            <div>
                <h2>REGISTRATION</h2>
                <RegistrationForm onSubmit={onSubmit}
                                  email={props.email}
                                  changeEmail={changeEmail}
                                  isDisabled ={props.isDisabled}
                                  setError={setError}
                                  error={props.error}/>
                <NavLink to={LOGIN_PATH}>Login</NavLink>
            </div>
        )

    };

const mapStateToProps = (state)=>({
    email: state.registration.email,
    success: state.registration.success,
    isLoading: state.registration.isLoading,
    isDisabled: state.registration.isDisabled,
    error: state.registration.error
});

export default connect(mapStateToProps, {registration, registrationSuccess,  registrationError}) (RegistrationPage)