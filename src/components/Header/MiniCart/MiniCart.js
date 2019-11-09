import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions/index";
import { backendBaseUrl } from "../../../shared/utility";

class MiniCart extends Component {
    removeItemHandler = item => () => {
        this.props.onRemoveCartItem(item);
    };
    render() {
        let cartItems;
        if (JSON.parse(localStorage.getItem("cart_items"))) {
            const cart = JSON.parse(localStorage.getItem("cart_items")).cart;
            cartItems = cart.map(item => (
                <Grid
                    className="item"
                    key={item.id}
                    item
                    container
                    direction="row"
                >
                    <Link
                        to={
                            this.props.isAuthenticated
                                ? "/checkout"
                                : "/users/login"
                        }
                        className="item__details"
                    >
                        <img
                            className="item__img"
                            src={`${backendBaseUrl}/images/${item.photo}`}
                            alt={item.name}
                        />
                        <div>
                            <p className="item__name">{item.name}</p>
                            <p className="item__price">
                                <small>{item.price}</small> هزار تومان
                            </p>
                        </div>
                    </Link>
                    <small
                        onClick={this.removeItemHandler(item)}
                        className="item__remove"
                    >
                        x
                    </small>
                </Grid>
            ));
        }
        let cartQty;
        if (localStorage.getItem("cart_items")) {
            cartQty =
                JSON.parse(localStorage.getItem("cart_items")).cart.length ===
                0 ? (
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
    items: state.cart.cart,
    totalQty: state.cart.totalQty,
    isAuthenticated: state.auth.token !== null
});
const mapDispatchToProps = dispatch => ({
    onRemoveCartItem: item => dispatch(actions.removeCartItem(item))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MiniCart);
