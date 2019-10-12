import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from "@material-ui/core/Checkbox";
import {Link ,Redirect} from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner'
class SignIn extends Component {
    state = {
        controls: {
            username:{
                elementType:"TextField",
                elementConfig: {
                    name:"username",
                    type:"text",
                    margin:"normal",
                    variant:"outlined",
                },
                label:"نام کاربری",
                value: '',
                validation: {
                    required: true,
                    minLength: 3
                },
                errorMessage:"نام کاربری باید حداقل 3 کارکتر باشد.",
                valid: false,
                filledIn: false
            },
            password:{
                elementType:"TextField",
                elementConfig:{
                    name:"password",
                    type:"password",
                    margin:"normal",
                    variant:"outlined"
                },
                label:"رمز عبور",
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                errorMessage:"رمز عبور باید حداقل 6 کارکتر باشد.",
                valid: false,
                filledIn: false
            },
        },
        formIsValid:false,
        formMessage:null,
        loading:false,
        siteRules:true
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        return isValid;
    }
    inputChangedHandler = (event ,controlName) => {
        this.setState({formMessage:null});
        const updatedControls =  {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                filledIn:false 
            }
        };
       this.setState({controls:updatedControls});
    }
    onInputBlur = (event ,controlName) => {
        const updatedControls =  {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                valid:this.checkValidity(event.target.value ,this.state.controls[controlName].validation),
                filledIn:true
            }
        };
     let formIsValid = true;
        for(let inputIdentifier in updatedControls){
            formIsValid = updatedControls[inputIdentifier].valid
        }
       this.setState({controls:updatedControls,formIsValid:formIsValid});
    }
    submitHandler = (event) => {
        event.preventDefault();
        if(!this.state.formIsValid){
            this.setState({formMessage:"لطفا اطلاعات را بطور کامل وارد کنید."});
            return false;
        }
        this.props.onAuth(
            this.state.controls.username.value,
            this.state.controls.password.value
        )
    }
    
    render () {
        let formEelementsArray = [];
        for(let key in this.state.controls){
            formEelementsArray.push({
                id:key,
                config :this.state.controls[key]
            })
        }
        const form = formEelementsArray.map(formElement => (
            <Input 
                labelName={formElement.config.label}
                key={formElement.id} 
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                onBlur={(event)=> this.onInputBlur(event,formElement.id)}
                filledIn={formElement.config.filledIn}
                errorMessage={formElement.config.errorMessage}
                changed={(event) => this.inputChangedHandler(event ,formElement.id)} /> 
            ));
            let errorMessage = null ;
            if(this.props.error){
                errorMessage = (
                    <p className="errorColor">{this.props.error}</p>
                );
            }
            let authRedirect = null;
            if(this.props.isAuthenticated){
                authRedirect = <Redirect to="/" />
            }
          
        return (
            <Grid item xs={12} md={6} style={{padding: "10rem 0"}} className="form_container">
                {authRedirect}
                <Paper className="form_body">
                {this.props.loading ? <Spinner /> : null}
                    <Link to="/users/register" className="registerTab">ثبت نام</Link>
                    <Link to="/users/login" className="loginTab active">ورود</Link>
                <form onSubmit={this.submitHandler}>
                {form}
                    <div>
                        <button className="login_btn">ورود</button>
                        <label><Checkbox style={{padding: "0 2rem 0 5px"}} /></label>
                        <span id="rememberMe">مرا به خاطر بسپار</span>
                    </div>
                    <p style={{color:"red",display:"inline-block"}}>{this.state.formMessage}</p>
                    {errorMessage}
                    <p id="lost_password">رمز عبور خود را فراموش کرده اید؟</p>
                </form>
                </Paper>
            </Grid>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        loading:state.auth.loading,
        error:state.auth.error,
        isAuthenticated: state.auth.token !== null
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth:(username,password) => dispatch(actions.loginAuth(username,password))
    };
};

export default connect(mapStateToProps , mapDispatchToProps)(SignIn);