import React from "react";
import Input from "../common/input";
import Button from "../common/button";

const ForgotForm = (props) => {
    return (
        <div>
                <input type="text" placeholder={"enter your email"} value={props.email} name={'email'}/>
                <button> Enter</button>
        </div>
    )
};

export default ForgotForm