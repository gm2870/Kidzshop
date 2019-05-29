import React , {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import user from '../../../../assets/images/user.png';
import {Link} from 'react-router-dom';
class UsersBox extends Component {
    render () {
        return (
            <div className="users_container">
                <div className="users_box">
                    <div className="user_menu">
                        <img className="user_icon" src={user} alt="user icon"/>
                        <div className="user_info">
                            <p className="hello_text">سلام</p>
                            <p className="userName_text">{localStorage.getItem('username')}</p>
                        </div>      
                        <div className="ArrowDropDown"><ArrowDropDown /></div>
                    </div>
                    <div className="sub-menu">
                        <Paper>
                            <div className="mega-menu">
                               <ul className="users_drop_menu">
                                   <li>داشبورد</li>
                                   <li>پروفایل</li>
                                   <li>لینک</li>
                                   <li>لینک</li>
                                   <li><Link to='/logout'>خروج</Link></li>
                               </ul>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    };
};

export default UsersBox;