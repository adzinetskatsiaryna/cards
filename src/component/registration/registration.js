import React from "react";
import RegistrationForm from "./registrationForm";
import {NavLink, Redirect} from "react-router-dom";
import {LOGIN_PATH} from "../routes";
import {connect} from "react-redux";
import {registractionError, registration, registrationSuccess} from "../../redux/registrationRedux";




const RegistrationPage = (props)=>{
    const onSubmit = (email, password)=>{
        props.registration(email, password)
    }

    const changeEmail=(email)=>{
    props.registrationSuccess(email)
    }


    const setError=(error)=>{
        props.registractionError(error)
    }

    // if(props.success){
    //   return <Redirect to={LOGIN_PATH}/>
    // }

    return (

        <div>
           <h2>REGISTRATION</h2>
            <RegistrationForm onSubmit={onSubmit} email={props.email} changeEmail={changeEmail} setError={setError} {...props} />
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )

};

const mapStateToProps = (state)=>({
    email: state.registration.email,
    success:state.registration.success,
    error:state.registration.error,
    isDisabled:state.registration.isDisabled,
    isLoading:state.registration.isLoading
});

export default connect(mapStateToProps, {registration,registrationSuccess,registractionError}) (RegistrationPage)