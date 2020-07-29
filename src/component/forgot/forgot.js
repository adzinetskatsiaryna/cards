import React from "react";
import ForgotForm from "./ForgotForm";
import {LOGIN_PATH} from "../routes";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {forgotPassword} from "../../redux/forgotReducer";

const ForgotPage = (props)=>{

    return (
        <div>
            <h2>FORGOT</h2>
            <ForgotForm {...props} />
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )
};

const mapStateToProps=(state)=>({
    success:state.forgot.success,
        email:state.forgot.email
}
)
export default connect(mapStateToProps,{forgotPassword})(ForgotPage);