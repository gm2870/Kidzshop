import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumb from '../../../components/UI/Breadcrumb/Breadcrumb'
import { backendBaseUrl } from "../../../shared/utility";
class Product extends React.Component {
    state = {
        added:false
    }
    componentDidMount() {
        this.props.onGetProduct(this.props.match.params.id);
    }
    addToCartHandler = item => () => {
        this.props.onAddToCart(item);
       // this.setState({added:true})
    };
    render() {
        return (
            <Grid container direction="row">
                <Grid item xs={12} sm={6} className="gallery">
                    <figure className="gallery__wrapper">
                        <div className="gallery__inner">
                            <img
                                className="gallery__image"
                                src={`${backendBaseUrl}/images/${this.props.product.photo}`}
                                alt="عکس"
                            />
                        </div>
                    </figure>
                </Grid>
                <Grid item xs={12} sm={6} className="product">
                    <Breadcrumb {...this.props} />
                    <div className="product__summary">   
                        <h1 className="product__title">
                            {this.props.product.name}
                        </h1>
                        <div>
                            <p className="product__description">
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد.
                            </p>
                            <p className="product__price">
                                {this.props.product.price} هزار تومان
                            </p>
                        </div>

                        <button
                            onClick={this.addToCartHandler(this.props.product)}
                            className="btn btn--main addToCart__btn"
                        >
                            {!this.props.added
                                ? "افزودن به سبد خرید"
                                : "مشاهده سبد خرید"}
                        </button>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
const mapStateToProps = state => ({
    product: state.product.product,
    error: state.product.error,
    isFetched: state.product.isFetched,
    added: state.cart.cart.added
});
const mapDispatchToProps = dispatch => ({
    onGetProduct: id => dispatch(actions.getProduct(id)),
    onAddToCart: item => dispatch(actions.addItemToCart(item))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
