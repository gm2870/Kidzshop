import React, { useState } from "react";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import user from "../../../assets/images/user.svg";
import { Paper, InputBase } from "@material-ui/core";

const mobileHeader = () => {
    const [searchIconClicked, setSearchIconSate] = useState(false);
    const onClickedHandler = () => {
        setSearchIconSate(!searchIconClicked);
    };
    let cartQty = 0;
    if (localStorage.getItem("cart_items")) {
        cartQty = JSON.parse(localStorage.getItem("cart_items")).length;
    }
    return (
        <header className="header mobileHeader">
            <div className="mobileHeader-right">
                <Menu className="menu" />
                <Link to="/" className="title">
                    کیدزشاپ
                </Link>
            </div>
            <div className="mobileHeader mobileHeader-left">
                <IconButton aria-label="Search" onClick={onClickedHandler}>
                    <SearchIcon className="mobileHeader__searchIcon" />
                </IconButton>
                <div className="cart">
                    <ShoppingCart id="ShoppingCart" />
                    <span className="cart__counter">{cartQty}</span>
                </div>
                <Link to="/users/login" className="user_icon">
                    <img src={user} alt="user icon" />
                </Link>
            </div>
            {searchIconClicked ? (
                <Paper className="input_body">
                    <form role="search" method="get" className="header__search">
                        <IconButton aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase placeholder="به دنبال چیزی می گردید؟" />
                    </form>
                </Paper>
            ) : null}
        </header>
    );
};
export default mobileHeader;
