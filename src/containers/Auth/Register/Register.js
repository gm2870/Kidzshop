import React, { Component } from 'react';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from 'react-router-dom';
import Input from '../../../components/UI/Forms/Register/Input/Input';
class Register extends Component {
    state = {
        controls: {
            username:{
                elementType:"TextField",
                elementConfig: {
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
            email: {
                elementType:"TextField",
                elementConfig: {
                    type:"text",
                    margin:"normal",
                    variant:"outlined",
                },
                label:"ایمیل",
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                errorMessage:"ایمیل صحیح نمی باشد.",
                valid: false,
                filledIn: false
            },
            password:{
                elementType:"TextField",
                elementConfig:{
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
            repeatPass:{
                elementType:"TextField",
                elementConfig:{
                    type:"password",
                    margin:"normal",
                    variant:"outlined"
                },
                label:"تکرار رمز عبور",
                value:'',
                validation: {
                    required: true,
                    minLength: 6,
                    sameAsPass:true
                },
                errorMessage:"رمز عبور یکسان نیست",
                valid: false,
                filledIn: false
            }
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

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.sameAsPass) {
            const password = this.state.controls.password.value
            isValid = value.trim() === password  && isValid
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
                filledIn:false,
                
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
            this.state.controls.password.value,
            this.state.controls.email.value,
            this.state.controls.repeatPass
        )
    }
    checkboxHandler = () => {

    }

    render () {
        let formEelementsArray = [];
        for(let key in this.state.controls){
            formEelementsArray.push({
                id:key,
                config :this.state.controls[key]
            })
        }

        return (
            <Grid item xs={12} md={6} style={{padding: "10rem 0"}} className="form_container">
                <Paper className="form_body">
                <Link to="/users/register" className="registerTab active">ثبت نام</Link>
                <Link to="/users/login" className="loginTab">ورود</Link>
                <form onSubmit={this.submitHandler}>
                    {formEelementsArray.map(formElement => (
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
                    ))}
                    <div>
                    <div>
                         <label><Checkbox onChange={this.checkboxHandler} checked={this.state.siteRules} style={{padding: "0 0 0 5px"}} /></label>
                         <Link to="/" id="rules">با قوانین موافقم</Link>
                    </div>
                        <button className="login_btn">ثبت نام</button>
                        <p style={{color:"red"}}>{this.state.formMessage}</p>
                    </div>
                    </form>
                </Paper>
            </Grid>
        );
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth:(username,password,email,repeatPass) => dispatch(actions.auth(username,password,email,repeatPass))
    }
}

export default connect(null,mapDispatchToProps)(Register);