import React, {useState} from "react";
import Input from "../common/input";
import Button from "../common/button";
import "../../App.css";

const LoginForm = React.memo((props)=>{

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [rememberMe, setRememberMe]=useState(true);

    const onChangeEmail = (e)=>{
        setEmail(e.currentTarget.value)
    };
    const onChangePassword=(e)=>{
        setPassword(e.currentTarget.value)
    };
    const onChangeRememberMe = (e)=>{
        setRememberMe(e.currentTarget.checked)
    };

    return (
        <div>
            <div>
               <input type={'text'} placeholder={'email'} value={email} name={'email'} onChange={onChangeEmail}/>
               <input type={'password'} placeholder={'password'} value={password} name={'password'} onChange={onChangePassword}/>
               <input type={'checkbox'} value={rememberMe} name={'rememberMe'} onChange={onChangeRememberMe}/>
               <button onClick={()=>{props.onSubmit(email, password, rememberMe)}} disabled={props.disabled}>login</button>

            </div>
        </div>
    )
});

export default LoginForm

// class LoginForm extends React.Component {
//
//     state = {
//         mail: null,
//         password: null,
//         rememberMe: true,
//         formErrors:{email:"",password: ""},
//         emailValid:false,
//         passwordValid:false,
//         formValid:false
//     };
//
//     validateField(fieldName, value) {
//         let fieldValidationErrors = this.state.formErrors;
//         let emailValid = this.state.emailValid;
//         let passwordValid = this.state.passwordValid;
//         switch(fieldName) {
//             case 'email':
//                 emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//                 fieldValidationErrors.email = emailValid ? '' : ' is invalid';
//                 break;
//             case 'password':
//                 passwordValid = value.length >= 6;
//                 fieldValidationErrors.password = passwordValid ? '': ' is too short';
//                 break;
//             default:
//                 break;
//         }
//         this.setState({formErrors: fieldValidationErrors,
//             emailValid: emailValid,
//             passwordValid: passwordValid
//         }, this.validateForm);
//     }
//     validateForm() {
//         this.setState({
//             formValid: this.state.emailValid &&
//                 this.state.passwordValid
//         });
//     }
//
//
//
//     handelInputChange = (value, name) => {
//         this.setState({
//             [name]: value
//         },
//             ()=>this.validateField(name,value))
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
//                     <Button type='submit' title={'login'} onClick={()=>{this.props.onSubmit(this.state.email, this.state.password, this.state.rememberMe)}}
//                             // disabled={!this.state.formVaid}
//                     />
//                    <div style={{color: "red"}}>
//                   <FormErrors formErrors={this.state.formErrors} />
//             </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export const FormErrors = ({formErrors}) =>
//     <div className='formErrors'>
//         {Object.keys(formErrors).map((fieldName, i) => {
//             if(formErrors[fieldName].length > 0){
//                 return (
//                     <p key={i}>{fieldName} {formErrors[fieldName]}</p>
//                 )
//             } else {
//                 return '';
//             }
//         })}
//     </div>
//
// export default LoginForm;
