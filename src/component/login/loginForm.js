import React, {useState} from "react";
import Input from "../common/input";
import Button from "../common/button";

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
               <input type={'email'} placeholder={'email'} value={email} name={'email'} onChange={onChangeEmail}/>
               <input type={'password'} placeholder={'password'} value={password} name={'password'} onChange={onChangePassword}/>
               <input type={'checkbox'} value={rememberMe} name={'rememberMe'} onChange={onChangeRememberMe}/>
               <button onClick={()=>props.onSubmit(email, password, rememberMe)} disabled={props.isDisabled}>login</button>
            </div>
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