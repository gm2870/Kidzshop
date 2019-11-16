import React from "react";
import Grid from "@material-ui/core/Grid";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Paper from "@material-ui/core/Paper";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { connect } from "react-redux";
import AuthBox from "./AuthBox/AuthBox";
import UsersBox from "./UserBox/UserBox";
import MiniCart from "../MiniCart/MiniCart";

const desktopHeader = props => {
    let cartQty = 0;
    if (JSON.parse(localStorage.getItem("cart_items"))) {
        cartQty = JSON.parse(localStorage.getItem("cart_items")).cart.length;
    }

    return (
        <header className="header">
            <Grid
                container
                direction="row"
                className="container"
                justify="center"
                alignItems="center"
            >
                <div className="header__logo">
                    <Link to="/">کیدزشاپ</Link>
                </div>
                <div className="header__categories">
                    <span>همه دسته بندی ها</span>
                    <KeyboardArrowDown />
                </div>
                <Paper>
                    <form role="search" method="get" className="header__search">
                        <IconButton aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase placeholder="به دنبال چیزی می گردید؟" />
                    </form>
                </Paper>
                <div className="header__icons">
                    <div className="cart">
                        <ShoppingCart id="ShoppingCart" />
                        <span className="cart__counter">{cartQty}</span>
                        <MiniCart />
                    </div>
                    <div>
                        <FavoriteBorder id="like-icon" />
                    </div>
                </div>
                {!props.isAuthenticated ? <AuthBox /> : <UsersBox />}
            </Grid>
        </header>
    );
};
const mapStateToProps = state => ({
    totalQty: state.cart.totalQty
});
export default connect(mapStateToProps)(desktopHeader);
