import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { Link } from "react-router-dom";
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
class Cart extends React.Component {
    render() {
        let cartItems;
        let cart;
        if (JSON.parse(localStorage.getItem("cart_items"))) {
            cart = JSON.parse(localStorage.getItem("cart_items")).cart;
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
                        <button className="cart-item__remove">
                            <HighlightOffIcon />
                        </button>
                    </div>
                </div>
            ));
        }
        return (
            <Auxiliary>
                <div className="cart">
                    <nav className="breadcrumb">
                        <Link to="/">خانه</Link>
                        <span className="breadcrumb__separator"> / </span>
                        سبد خرید
                    </nav>
                    <div className="features">
                        <ul className="features__list">
                            <li className="feature">
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
                            </li>
                            <li className="feature">
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
                            </li>
                            <li className="feature">
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
                            </li>
                        </ul>
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
                                    50 هزار تومان
                                </span>
                            </div>
                            <div className="cart-delivery">
                                <p className="delivery-title">حمل و نقل</p>
                                <div className="clearfix">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        id="tipax"
                                    />
                                    <label htmlFor="tipax">ارسال تیپاکس</label>
                                    <p className="delivery-price">
                                        14 هزار تومان
                                    </p>
                                </div>
                                <div className="clearfix">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        id="post"
                                    />
                                    <label htmlFor="post">ارسال پستی</label>
                                    <p className="delivery-price">
                                        8 هزار تومان
                                    </p>
                                </div>
                            </div>
                            <p>
                                این تنها یک تخمین است. قیمت‌ها در هنگام پرداخت
                                بروز می شوند.
                            </p>
                            <Link to="/">محاسبه حمل و نقل</Link>
                            <div className="final-amount clearfix">
                                <span className="final-amount-text">مجموع</span>
                                <span className="final-amount-value">
                                    50 هزار تومان
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="proceed-to-checkout">
                        <Link to="/">ادامه خرید</Link>
                        <Link to="/">ادامه جهت تسویه حساب</Link>
                    </div>
                </div>
            </Auxiliary>
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
)(Cart);
