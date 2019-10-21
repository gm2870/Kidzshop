import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardView from "../../../components/UI/CardView/CardView";
import * as actions from "../../../store/actions/index";

class Popular extends Component {
    componentDidMount() {
        this.props.onGetPopular();
    }
    incrementHandler = id => () => {
        this.props.onIncrement(id);
    };

    decrementHandler = id => () => {
        this.props.onDecrement(id);
    };

    addToCartHandler = id => () => {
        this.props.onAddToCart(id);
    };

    render() {
        let products = (
            <CircularProgress
                className="fetch-popular-spinner"
                color="secondary"
            />
        );
        if (this.props.isFetched) {
            products = this.props.popularP.map(item => (
                <CardView
                    key={item.id}
                    image={item.photo}
                    name={item.name}
                    price={item.price}
                    qty={item.quantity}
                    availableQty={item.quantity}
                    incremented={this.incrementHandler(item.id)}
                    decremented={this.decrementHandler(item.id)}
                    addedToCart={this.addToCartHandler(item.id)}
                />
            ));
        }

        return (
            <section className="popluar_section">
                <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
                    محبوب ترین محصولات
                </h1>
                <p style={{ textAlign: "center", margin: "10px 0" }}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است!
                </p>
                <Grid container direction="row" className="container">
                    {products}
                </Grid>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    popularP: state.popular.popular,
    isFetched: state.popular.isFetched,
    qty: state.popular.qty,
    cart: state.popular.cart
});
const mapDispatchToProps = dispatch => ({
    onIncrement: id => dispatch(actions.incrementQty(id)),
    onDecrement: id => dispatch(actions.decrementQty(id)),
    onGetPopular: () => dispatch(actions.getPopularProducts()),
    onAddToCart: id => dispatch(actions.addToCart(id))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popular);
