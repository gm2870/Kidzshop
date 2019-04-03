import React , {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import user from '../../../../assets/images/user.png';
import {connect} from 'react-redux';
class UsersBox extends Component {
    render () {
        return (
            <div className="users_container">
                <div className="users_box">
                    <div className="user_menu">
                        <img className="user_icon" src={user} alt="user icon"/>
                        <div className="user_info">
                            <p className="hello_text">سلام</p>
                            <p className="userName_text">{this.props.userName}</p>
                        </div>      
                        <div className="ArrowDropDown"><ArrowDropDown /></div>
                    </div>
                    <div className="sub-menu">
                        <Paper>
                            <div className="mega-menu">
                               <ul className="users_drop_menu">
                                   <li>dashboard</li>
                                   <li>link2</li>
                                   <li>link3</li>
                                   <li>link4</li>
                                   <li>logout</li>
                               </ul>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    };
};
const mapStateToProps = state => {
    return {
        userName:state.auth.userName
    }
}
export default connect(mapStateToProps)(UsersBox);