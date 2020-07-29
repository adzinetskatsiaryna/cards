import React, {useState} from "react";

const ForgotForm = (props) => {
    const [email, setEmail]=useState('');

    const changeForgotEmail = (e)=>{
        setEmail(e.currentTarget.value)
    };

    return (
        <div>
            <div>
                <input type={'email'} placeholder={'add email'} value={email} onChange={changeForgotEmail} />
                <button onClick={()=>{props.onSubmitForgot(email)}}>Enter</button>
            </div>
        </div>
    )
};

export default ForgotForm