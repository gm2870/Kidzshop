import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

class Register extends Component {
    render () {
        return (
            <Grid item xs={12} md={6} style={{padding: "11rem 0"}} className="form_container">
            <form>
                <Paper className="form_body">
                <h2 className="registerTab active">ثبت نام</h2>
                <h2 className="loginTab">ورود</h2>
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
                <label><Checkbox style={{padding: "0 20px 0 5px"}} /></label>
                    <a href="#" id="rules">با قوانین موافقم</a>
                    <button className="login_btn">ثبت نام</button>
                </div>
                </Paper>
            </form>

    </Grid>
        );
    }
}
export default Register;