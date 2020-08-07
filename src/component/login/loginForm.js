import React, {useState} from "react";
import Input from "../common/input";
import Button from "../common/button";
import s from './login.module.css';
const LoginForm = React.memo((props)=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState( 'Incorrect email ');
    const [passwordError, setPasswordError] = useState('the number of simbols should be more then 7');


    // const emailValidate = () => {
    //     if (!email.includes('@')) {    //
    //         setEmailError(emailError)
    //     }
    //     if (password.length < 8) {
    //         setPasswordError(passwordError)
    //     }
    // }


    const onChangeEmail = (e) => {
        if (!email.includes('@')) {
            setEmailError(emailError)
        }
        setEmail(e.currentTarget.value);

    };

    const onChangePassword = (e) => {
        setPassword(e.currentTarget.value);
        if (password.length < 8) {
            setPasswordError(passwordError)
        }
    };

    const onChangeRememberMe = (e) => {
        setRememberMe(e.currentTarget.checked)
    };

    const onHandleSubmit = () => {
       // validate()
        props.onSubmit(email, password, rememberMe)
    }


    return (

        <div>
            <div>
               <input type={'email'} placeholder={'email'} value={email} name={'email'} onChange={onChangeEmail}/>
              <div><span className={s.error_message}>{emailError}</span></div>
               <input type={'password'} placeholder={'password'} value={password} name={'password'} onChange={onChangePassword}/>
              <div><span className={ s.error_message}>{passwordError}</span></div>
               <input type={'checkbox'} value={rememberMe} name={'rememberMe'} onChange={onChangeRememberMe}/>
               <button onClick={onHandleSubmit} disabled={props.isDisabled}>login</button>
            </div>
            <div><span>{props.error}</span></div>


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