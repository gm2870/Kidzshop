import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Paper from '@material-ui/core/Paper';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import AuthBox from './Authentication/Authentication';
import UsersBox from './Users/Users';
import {connect} from 'react-redux';
import MiniCart from '../../../containers/MiniCart/MiniCart'

const TopHead = (props) => {
    return (
        <header className="header">
            <Grid container direction="row" className="container" justify="center"  alignItems="center">
                    <div id="logo">    
                        <Link to="/">کیدزشاپ</Link>
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
                        <span id="counter_body">{props.totalQty}</span>
                        <MiniCart />
                    </div>

                    <div><FavoriteBorder id="like-icon"/></div>
                </div>
                {!props.isAuthenticated ? <AuthBox /> : <UsersBox /> }
            </Grid>
        </header>
    );
 };
const mapStateToProps = state => {
    return {
        totalQty:state.popular.totalQty
    }
}
export default connect(mapStateToProps)(TopHead) ;