import React, {useState} from "react";

// const RegistrationForm = (props)=>{
//     const [password, setPassword]=useState('');
//
//     const onChangePassword = (e)=>{
//         setPassword(e.currentTarget.value)
//     };
//     const onChangeRepeatPassword = (e)=>{
//         if(password===e.currentTarget.value){
//             setPassword(e.currentTarget.value)
//         }else {
//             setRepeatPassword('add correct password')
//         }
//     };
//
//
//     return (
//         <div>
//             <form>
//                <input type={'email'} value={props.email} name={'email'} placeholder={'email'}/>
//                <input type={'password'} value={password} name={'password'} placeholder={'add password'} onChange={onChangePassword}/>
//                <input type={'password'} value={repeatPassword} name={'password'} placeholder={'repeat password'} onChange={onChangeRepeatPassword}/>
//                <button>registration</button>
//             </form>
//         </div>
//     )
// };
//
// export default RegistrationForm



class RegistrationForm extends React.Component{

    state = {
        password: '',
        password2:"",
        passwordError: '',
    };

    onChangePassword = (e)=>{
        this.setState({
            password: e.currentTarget.value
        })
    };

    onChangeRepeatPassword = (e)=>{
        this.setState({
            password2: e.currentTarget.value
        })
    };

    onChangeEmail=(e)=>{
       this.props.changeEmail(e.currentTarget.value)
    };
    onPasswordSubmit=()=>{
        if(this.state.password === this.state.password2){
            this.props.onSubmit(this.props.email, this.state.password)
        }else {
            this.setState({
                passwordError: 'uncorrected password'
            })
        }
    };

    render() {

        return (
            <div>
                <div className="registrationWrapper">
                    <input type={'email'} value={this.props.email} name={'email'} placeholder={'email'} onChange={this.onChangeEmail}/>
                    <input type={'password'} value={this.state.password} name={'password'} placeholder={'add password'}
                           onChange={this.onChangePassword}/>
                    <input type={'password'} value={this.state.password2} name={'password'}
                           placeholder={'repeat password'} onChange={this.onChangeRepeatPassword}/>
                    <button onClick={this.onPasswordSubmit} disabled={this.props.isDisabled}>registration</button>
                </div>
                <div><span>{this.state.passwordError}</span></div>
                <div><span>{this.props.error}</span></div>
            </div>
        )
    }
};

export default RegistrationForm