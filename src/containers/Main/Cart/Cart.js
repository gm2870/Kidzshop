import React from "react";
import { Link, Redirect } from "react-router-dom";
import PaymentIcon from "@material-ui/icons/Payment";
import SecurityIcon from "@material-ui/icons/Security";
import ReplayIcon from "@material-ui/icons/Replay";
import { backendBaseUrl } from "../../../shared/utility";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Grid } from "@material-ui/core";
class Cart extends React.Component {
    componentDidMount() {
        document.querySelector("#post").setAttribute("checked", true);
    }
    state = {
        delivery: [
            {
                name: "تیپاکس",
                price: 14,
                type: "tipax"
            },
            {
                name: "پست",
                price: 8,
                type: "post"
            }
        ],
        deliveryPrice: 8
    };
    deliveryHandler = price => () => {
        this.setState({
            deliveryPrice: price
        });
    };
    removeCartItemHandler = item => () => {
        this.props.onRemoveCartItem(item);
    };
    render() {
        const radioBoxes = this.state.delivery.map((item, index) => {
            return (
                <div className="clearfix" key={index}>
                    <input
                        onChange={this.deliveryHandler(item.price)}
                        type="radio"
                        name="delivery"
                        id={item.type}
                    />
                    <label htmlFor={item.type}>ارسال {item.name}</label>
                    <p className="delivery-price">{item.price} هزار تومان</p>
                </div>
            );
        });
        let authRedirect;
        if (
            JSON.parse(localStorage.getItem("cart_items")) &&
            JSON.parse(localStorage.getItem("cart_items")).cart.length <= 0
        ) {
            authRedirect = <Redirect to="/cart" />;
        }
        let cartItems;
        let cart;
        let totalPrice;
        if (JSON.parse(localStorage.getItem("cart_items"))) {
            cart = JSON.parse(localStorage.getItem("cart_items")).cart;
            totalPrice = JSON.parse(localStorage.getItem("cart_items"))
                .totalPrice;
            cartItems = cart.map(item => (
                <div key={item.id} className="cart-item">
                    <div className="cart-item__details">
                        <img
                            className="cart-item__image"
                            src={`${backendBaseUrl}/images/${item.photo}`}
                            alt="item"
                        />
                        <h3 className="cart-item__name">{item.name}</h3>
                    </div>
                    <div className="cart-item__actions">
                        <span className="cart-item__price">
                            {item.price} هزار تومان
                        </span>
                        <ul className="quantity">
                            <li className="quantity__btn quantity__btn--add">
                                <AddCircleOutlineIcon />
                            </li>
                            <li className="quantity__value">{item.qty}</li>
                            <li className="quantity__btn quantity__btn--remove">
                                <RemoveCircleOutlineIcon />
                            </li>
                        </ul>
                        <button
                            className="cart-item__remove"
                            onClick={this.removeCartItemHandler(item)}
                        >
                            <HighlightOffIcon />
                        </button>
                    </div>
                </div>
            ));
        }
        return (
            <React.Fragment>
                {authRedirect}

                <div className="cart">
                    <nav className="breadcrumb">
                        <Link to="/">خانه</Link>
                        <span className="breadcrumb__separator"> / </span>
                        سبد خرید
                    </nav>
                    <div className="features">
                        <Grid className="features__list" container>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="feature"
                            >
                                <div className="feature__inner">
                                    <div className="feature__thumbnail">
                                        <SecurityIcon className="feature__svg" />
                                    </div>
                                    <div className="feature__info">
                                        <h3 className="feature__info--title">
                                            امنیت پرداخت
                                        </h3>
                                        <span className="feature__info--desc">
                                            لورم ایپسوم متن ساختگی با تولید
                                            سادگی نامفهوم از صنعت چاپ و با
                                            استفاده...
                                        </span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="feature"
                            >
                                <div className="feature__inner">
                                    <div className="feature__thumbnail">
                                        <PaymentIcon className="feature__svg" />
                                    </div>
                                    <div className="feature__info">
                                        <h3 className="feature__info--title">
                                            درگاه های عضو شتاب
                                        </h3>
                                        <span className="feature__info--desc">
                                            لورم ایپسوم متن ساختگی با تولید
                                            سادگی نامفهوم از صنعت چاپ و با
                                            استفاده...
                                        </span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                className="feature"
                            >
                                <div className="feature__inner">
                                    <div className="feature__thumbnail">
                                        <ReplayIcon className="feature__svg" />
                                    </div>
                                    <div className="feature__info">
                                        <h3 className="feature__info--title">
                                            ارسال رایگان
                                        </h3>
                                        <span className="feature__info--desc">
                                            لورم ایپسوم متن ساختگی با تولید
                                            سادگی نامفهوم از صنعت چاپ و با
                                            استفاده...
                                        </span>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    {cartItems}

                    <div className="cart__discount">
                        <div className="cart-coupon__info">
                            <div>
                                <LocalOfferIcon />
                            </div>
                            <div className="cart-coupon__info--title">
                                کد تخفیف/ کوپن
                                <p className="cart-coupon__info--subtitle">
                                    آیا تخفیف یا کد کوپن دارید؟ کد خود را اینجا
                                    وارد کنید اگر هنوز هیچی ندارید؟
                                </p>
                                <Link to="/">
                                    از طریق شبکه های اجتماعی و یا وبلاگ ما
                                    مشاهده کنید.
                                </Link>
                            </div>
                        </div>
                        <div className="coupon-form">
                            <input
                                type="text"
                                name="coupon_code"
                                className="input-text"
                                id="coupon_code"
                                placeholder="کد کوپن خود را اینجا وارد کنید"
                            />
                            <button
                                type="submit"
                                className="btn btn--main btn-coupon"
                                name="apply_coupon"
                            >
                                اعمال
                            </button>
                        </div>
                    </div>
                    <div className="cart-summary">
                        <ShoppingBasketIcon />
                        <h1>جمع کل سبد خرید</h1>
                        <div className="cart-summary__details">
                            <div className="clearfix">
                                <span className="total-text">جمع جزء</span>
                                <span className="total-amount">
                                    {totalPrice}
                                    هزار تومان
                                </span>
                            </div>
                            <div className="cart-delivery">
                                <p className="delivery-title">حمل و نقل</p>
                                {radioBoxes}
                            </div>
                            <p>
                                این تنها یک تخمین است. قیمت‌ها در هنگام پرداخت
                                بروز می شوند.
                            </p>
                            <Link to="/">محاسبه حمل و نقل</Link>
                            <div className="final-amount clearfix">
                                <span className="final-amount-text">مجموع</span>
                                <span className="final-amount-value">
                                    {totalPrice + this.state.deliveryPrice}
                                    هزار تومان
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="procceed-to-checkout">
                        <Link to="/">
                            <button className="btn btn--main">
                                ادامه خرید
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn--main">
                                ادامه جهت تسویه حساب
                            </button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    items: state.cart.cart,
    totalQty: state.cart.totalQty,
    totalPrice: state.cart.totalPrice,
    isAuthenticated: localStorage.getItem("token") !== null
});
const mapDispatchToProps = dispatch => ({
    onRemoveCartItem: item => dispatch(actions.removeCartItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
