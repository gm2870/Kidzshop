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

    // incrementHandler = id => () => {
    //     this.props.onIncrement(id);
    // };

    // decrementHandler = id => () => {
    //     this.props.onDecrement(id);
    // };

    addToCartHandler = item => () => {
        this.props.onAddToCart(item);
    };

    render() {
        console.log("rendered popular");
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
                    id={item.id}
                    image={item.photo}
                    name={item.name}
                    price={item.price}
                    availableQty={item.quantity}
                    added={item.added}
                    addedToCart={this.addToCartHandler(item)}
                />
            ));
        }

        return (
            <section className="popluar">
                <div className="popular__inner">
                    <h1 className="popular__heading">محبوب ترین محصولات</h1>
                    <p className="popular__paragraph">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است!
                    </p>
                    <Grid container direction="row" className="container">
                        {products}
                    </Grid>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    popularP: state.popular.popular,
    isFetched: state.popular.isFetched,
    cart: state.cart.cart,
    totalQty: state.cart.totalQty
});
const mapDispatchToProps = dispatch => ({
    // onIncrement: id => dispatch(actions.incrementQty(id)),
    // onDecrement: id => dispatch(actions.decrementQty(id)),
    onGetPopular: () => dispatch(actions.getPopularProducts()),
    onAddToCart: item => dispatch(actions.addItemToCart(item))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popular);
