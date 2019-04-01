import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from 'react-router-dom';
import Input from '../../../components/UI/Forms/Input/Input';
class Register extends Component {
    state = {
        controls: {
            email: {
                elementType:"TextField",
                elementConfig: {
                    type:"email",
                    margin:"normal",
                    variant:"outlined",
                },
                label:"ایمیل",
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
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
                valid: false,
                touched: false

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
                    sameAsPass:false
                },
                valid: false,
                touched: false
            }
        }
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
        const updatedContols =  {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                valid:this.checkValidity(event.target.value ,this.state.controls[controlName].validation),
                touched:true
            }
        };
    //    console.log(updatedContols);
       this.setState({controls:updatedContols});
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
            <Grid item xs={12} md={6} style={{padding: "11rem 0"}} className="form_container">
                <Paper className="form_body">
                <Link to="register/register" className="registerTab active">ثبت نام</Link>
                <Link to="/users/login" className="loginTab">ورود</Link>
                <form>
                    {formEelementsArray.map(formElement => (
                       <Input 
                       labelName={formElement.config.label}
                       key={formElement.id} 
                       elementType={formElement.config.elementType} 
                       elementConfig={formElement.config.elementConfig}
                       value={formElement.config.value}
                       changed={(event) => this.inputChangedHandler(event ,formElement.id)} /> 
                    ))}
                    <div>
                    <div>
                         <label><Checkbox style={{padding: "0 0 0 5px"}} /></label>
                         <Link to="/" id="rules">با قوانین موافقم</Link>
                    </div>
                        <button className="login_btn">ثبت نام</button>
                    </div>
                    </form>
                </Paper>
            </Grid>
        );
    };
};

export default Register;