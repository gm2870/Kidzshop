import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from 'react-router-dom';
class Register extends Component {
    render () {
        return (
            <Grid item xs={12} md={6} style={{padding: "11rem 0"}} className="form_container">
           
                <Paper className="form_body">
                <Link to="register/register" className="registerTab active">ثبت نام</Link>
                <Link to="/users/login" className="loginTab">ورود</Link>
                <form>
                    <div className="input_body">
                        <label>ایمیل</label>
                        <TextField variant="outlined" margin="normal" className="signIn_input" />
                    </div>
                    <div className="input_body">
                        <label>رمز عبور</label>
                        <TextField className="signIn_input"
                        margin="normal"
                        variant="outlined"
                        />
                    </div>
                    <div className="input_body">
                        <label>تکرار رمز عبور</label>
                        <TextField className="signIn_input"
                        margin="normal"
                        variant="outlined"
                        />
                    </div>
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
    }
}
export default Register;