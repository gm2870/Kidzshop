import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from 'react-router-dom';

class SignIn extends Component {
    render () {
        return (
               <Grid item xs={12} md={6} style={{padding: "11rem 0"}} className="form_container">
                        <Paper className="form_body">
                         <Link to="/users/register" className="registerTab">ثبت نام</Link>
                         <Link to="/users/login" className="loginTab active">ورود</Link>
                        <form>
                            <div className="input_body">
                                <label>نام کاربری یا ایمیل</label>
                                <TextField variant="outlined" margin="normal" className="signIn_input" />
                            </div>
                            <div className="input_body">
                                <label>رمز عبور</label>
                                <TextField className="signIn_input"
                                margin="normal"
                                variant="outlined"
                                />
                            </div>
                            <div>
                                <button className="login_btn">ورود</button>
                                <label><Checkbox style={{padding: "0 2rem 0 5px"}} /></label>
                                <span id="rememberMe">مرا به خاطر بسپار</span>
                            </div>
                            <p id="lost_password">رمز عبور خود را فراموش کرده اید؟</p>
                        </form>
                        </Paper>
 
            </Grid>

        );
    }
}
export default SignIn;