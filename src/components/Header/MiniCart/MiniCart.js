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
        let cartItems = null,
            cart = null,
            totalQty = 0;
        if (JSON.parse(localStorage.getItem("cart_items"))) {
            cart = JSON.parse(localStorage.getItem("cart_items")).cart;
            totalQty = JSON.parse(localStorage.getItem("cart_items")).totalQty;
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
                                ? "/cart"
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
        return (
            <Grid container direction="column" className="cart__items">
                <Paper style={{ padding: 15 }}>
                    {totalQty === null || totalQty === 0 ? (
                        <Grid className="empty_cart">
                            <p id="empty_cart_text">سبد خرید خالی است</p>
                        </Grid>
                    ) : (
                        cartItems
                    )}
                </Paper>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    items: state.cart.cart,
    totalQty: state.cart.totalQty
});
const mapDispatchToProps = dispatch => ({
    onRemoveCartItem: item => dispatch(actions.removeCartItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
