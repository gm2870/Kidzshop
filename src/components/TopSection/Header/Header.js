import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
// import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ShoppingCart from '@material-ui/icons/ShoppingCart'

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import user from '../../../assets/images/user.svg';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'


const header = (props) => (
    <header className="header">
        <Grid container direction="row" className="container" justify="center"  alignItems="center">
                <div id="logo">    
                    <span>کیدزشاپ</span>
                </div>
            <div className="categories">
                <span>همه دسته بندی ها</span>
                <KeyboardArrowDown style={{verticalAlign:"middle"}} />
            </div>
            <div>
                <Paper>
                    <form role="search" method="get" className="header-search">
                        <IconButton aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase style={{verticalAlign:"middle"}} placeholder="به دنبال چیزی می گردید؟" />
                    </form>
                </Paper>
            </div>
            <div className="header-icons">
                <div className="cart_container">
                    <ShoppingCart id="ShoppingCart"/>
                    <span id="counter_body">0</span>
                </div>
                <div><FavoriteBorder id="like-icon"/></div>
            </div>
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
                                        <div className="sign-in-action"><a href="http://demo.takplus.com/uneno/my-account/" className="sign-in-button">ورود</a></div>
                                    </div>
                                    <div className="register">
                                        <p>حساب کاربری ندارید؟</p>
                                        <div className="register-action"><a href="http://demo.takplus.com/uneno/my-account/">ثبت نام</a></div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </Grid>
    </header>

);
export default header ;