import React , {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import SignIn from './SignIn/SignIn';
import Register from './Register/Register';
import authBoy from '../../assets/images/auth_boy.png';
class Auth extends Component {
    render () {
        return (
            <Grid container direction="row" className="container auth_box" justify="center">
                <Grid item xs={12} md={2}>
                    <img src={authBoy} alt="auth kid" style={{width:"100%"}} />
                </Grid>
                <SignIn />
                <Register />
            </Grid>
        )
    }
}
export default Auth;