import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import UserAccount from "./containers/UserAccount/UserAccount";
import Main from "./containers/Main/Main";
import { Route, Switch, withRouter } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Product from "./containers/Main/Product/Product";
import Cart from "./containers/Main/Cart/Cart";
import EmptyCart from "./components/EmptyCart/EmptyCart";

class App extends Component {
    componentDidMount() {
        if (localStorage.getItem("token") !== null) {
            this.props.onTryStayLoggedin();
        }
        this.props.onCheckCart();
    }
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/users/login" component={Auth} />
                        <Route path="/users/register" component={Auth} />
                        <Route
                            path="/users/my-account"
                            component={UserAccount}
                        />
                        <Route path="/product/:id" component={Product} />
                        <Route
                            path="/cart"
                            component={
                                this.props.cart.length !== 0 ? Cart : EmptyCart
                            }
                        />

                        <Route path="/logout" component={Logout} />
                        <Route path="/" exact component={Main} />
                        <Route component={Main} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        cart: state.cart.cart,
        userId: state.auth.userId
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onTryStayLoggedin: () => dispatch(actions.checkLoginStatus()),
        onCheckCart: () => dispatch(actions.checkCartExpiryStatus())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
