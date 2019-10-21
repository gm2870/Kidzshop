/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
// import axios from "axios";
import { Link } from "react-router-dom";
class MiniCart extends Component {
    render() {
        let cartItems;
        if (localStorage.getItem("cart_items")) {
            cartItems = JSON.parse(localStorage.getItem("cart_items")).map(
                item => (
                    <Grid
                        className="item"
                        key={item.objectId}
                        item
                        container
                        direction="row"
                    >
                        <Link to="#" className="item__details">
                            <img
                                className="item__img"
                                src={item.icon.url}
                                alt={item.imgAlt}
                            />
                            <div>
                                <p className="item__name">{item.name}</p>
                                <span className="item__qty">x{item.qty}</span>
                                <p className="item__price">
                                    <small>{item.price}</small> هزار تومان
                                </p>
                            </div>
                        </Link>
                        <small className="item__remove">x</small>
                    </Grid>
                )
            );
        }
        let cartQty;
        if (localStorage.getItem("cart_items")) {
            cartQty =
                JSON.parse(localStorage.getItem("cart_items")).length === 0 ? (
                    <Grid className="empty_cart">
                        <p id="empty_cart_text">سبد خرید خالی است</p>
                    </Grid>
                ) : null;
        } else {
            cartQty = (
                <Grid className="empty_cart">
                    <p id="empty_cart_text">سبد خرید خالی است</p>
                </Grid>
            );
        }

        return (
            <Grid container direction="column" className="cart__items">
                <Paper style={{ padding: 15 }}>
                    {cartQty}
                    {cartItems}
                </Paper>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    items: state.popular.cart,
    totalQty: state.popular.totalQty
});
export default connect(mapStateToProps)(MiniCart);
