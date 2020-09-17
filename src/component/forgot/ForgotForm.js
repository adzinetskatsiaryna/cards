import React, {useState} from "react";

const ForgotForm = (props) => {
    const [email, setEmail]=useState('');
    const [emailNew,setEmailNew]=useState('')

    const changeForgotEmail = (e)=>{
        setEmail(e.currentTarget.value)
    };

    // const onHandlerSubmitForgot = ()=>{
    //     props.onSubmitForgot(email)
    // }

    return (
        <div>
            <div>
                <input type={'email'} placeholder={'add email'} value={email} onChange={changeForgotEmail} />
                <button onClick={()=>{props.onSubmitForgot(email)}} disabled={props.disabled}>Enter</button>
            </div>
        </div>
    )
};

export default ForgotForm