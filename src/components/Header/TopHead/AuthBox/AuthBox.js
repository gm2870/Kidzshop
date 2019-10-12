import React from 'react'; 
import user from '../../../../assets/images/user.svg';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const authBox = (props) => (
    <div className="login_register_container">
        <div className="login_register">
            <ul>
                <li className="user_icon"><img src={user} alt="user icon"/></li>
                <li className="auth_text"><span>ورود یا ثبت نام</span></li>
                <li className="ArrowDropDown"><ArrowDropDown /></li>
            </ul>
            <div className="sub-menu">
                <Paper>
                    <div className="mega-menu">
                        <div className="register-sign-in-dropdown-inner">
                            <div className="sign-in">
                                <p>بازگشت مشتری؟</p>
                                <div className="sign-in-action"><Link to="/users/login" className="sign-in-button" onClick={props.formHandler}>ورود</Link></div>
                            </div>
                            <div className="register">
                                <p>حساب کاربری ندارید؟</p>
                                <div className="register-action"><Link to="/users/register">ثبت نام</Link></div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    </div>
);
export default authBox;