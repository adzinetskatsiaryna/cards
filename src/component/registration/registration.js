import React from "react";
import RegistrationForm from "./registrationForm";
import {NavLink} from "react-router-dom";
import {LOGIN_PATH} from "../routes";
import {connect} from "react-redux";
import {registration} from "../../redux/registrationRedux";


const RegistrationPage = (props)=>{
    const onSubmit = (email, password)=>{
        props.registration(email, password)
    }

    return (
        <div>
           <h2>REGISTRATION</h2>
            <RegistrationForm onSubmit={onSubmit} props={...props} />
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )
};
const mapStateToProps = (state)=>({
    email: state.registration.addedUser.email
})

export default connect(mapStateToProps, {registration}) (RegistrationPage)