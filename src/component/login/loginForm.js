import React, {useState} from "react";
import style from './login.module.css'
import Input from "../common/input";
import Button from "../common/button";

const LoginForm = React.memo((props)=>{

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [rememberMe, setRememberMe]=useState(false);
    const [emailError, setEmailError]=useState(false);
    const [passwordError, setPasswordError]=useState(false);

    const validate = () => {
        if (!email.includes('@')) {
            let emailError = 'Incorrect email';
            setEmailError(emailError)
        }
        if(password.length < 8) {
            let passwordError = 'Password must be more than 7 characters...';
            setPasswordError(passwordError)
        }
    };

    const onChangeEmail = (e)=>{
        setEmail(e.currentTarget.value)
    };
    const onChangePassword=(e)=>{
        setPassword(e.currentTarget.value)
    };
    const onChangeRememberMe = (e)=>{
        setRememberMe(e.currentTarget.checked)
    };

    const onHandleSubmit = ()=>{
        validate();
        props.onSubmit(email, password, rememberMe);
    };

    return (
        <div>
            <div>
               <input
                   type={'email'}
                   placeholder={'email'}
                   value={email}
                   name={'email'}
                   onChange={onChangeEmail}
                   className={emailError? style.errorInput : ''}
               />
               <span className={style.error}>{emailError}</span>
               <input
                   type={'password'}
                   placeholder={'password'}
                   value={password} name={'password'}
                   onChange={onChangePassword}
                   className={passwordError? style.errorInput: ''}
               />
               <span className={style.error}>{passwordError}</span>
               <input
                   type={'checkbox'}
                   value={rememberMe}
                   name={'rememberMe'}
                   onChange={onChangeRememberMe}
               />
               <button onClick={onHandleSubmit} disabled={props.isDisabled}>login</button>
            </div>
            <div><span className={style.error}>{props.error}</span></div>
        </div>
    )
});

export default LoginForm

// class LoginForm extends React.Component {
//     state = {
//         mail: null,
//         password: null,
//         rememberMe: true
//     };
//
//     handelInputChange = (value, name) => {
//         this.setState({
//             [name]: value
//         })
//     };
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <Input type='email' placeholder={'add email'} value={this.state.email} name={'email'}
//                            handelInputChange={this.handelInputChange}/>
//                     <Input type='password' placeholder={'add password'} value={this.state.password} name={'password'}
//                            handelInputChange={this.handelInputChange}/>
//                     <Input type='checkbox' name={'rememberMe'} checked={this.state.rememberMe}
//                            handelInputChange={this.handelInputChange}/>
//                     <Button type='submit' title={'login'} onClick={()=>{this.props.onSubmit(this.state.email, this.state.password, this.state.rememberMe)}}/>
//                 </div>
//             </div>
//         )
//     }
// }

// export default LoginForm