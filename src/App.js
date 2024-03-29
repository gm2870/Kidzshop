import React, { Component, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import UserAccount from "./containers/UserAccount/UserAccount";
import Main from "./containers/Main/Main";
import { Route, Switch, withRouter } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Product from "./containers/Main/Product/Product";

const Cart = React.lazy(() => import("./containers/Main/Cart/Cart"));
const EmptyCart = React.lazy(() => import("./components/EmptyCart/EmptyCart"));

class App extends Component {
    componentDidMount() {
        if (localStorage.getItem("token") !== null) {
            this.props.onTryStayLoggedin();
        }
    }
    render() {
        let routes = (
            <Switch>
                <Route path="/users/login" component={Auth} />
                <Route path="/users/register" component={Auth} />
                <Route path="/product/:id" component={Product} />
                <Route path="/" exact component={Main} />
                <Route component={Main} />
            </Switch>
        );
        if (this.props.isAuthenticated) {
            let qty = 0;
            if (JSON.parse(localStorage.getItem("cart_items"))) {
                qty = JSON.parse(localStorage.getItem("cart_items")).totalQty;
                console.log(qty);
            }
            routes = (
                <Switch>
                    <Route path="/users/login" component={Auth} />
                    <Route path="/users/register" component={Auth} />
                    <Route path="/users/my-account" component={UserAccount} />
                    <Route path="/product/:id" component={Product} />
                    <Route path="/logout" component={Logout} />

                    <Route
                        path="/cart"
                        render={() => (
                            <Suspense fallback={<div>loading ...</div>}>
                                {qty === 0 ? <EmptyCart /> : <Cart />}
                            </Suspense>
                        )}
                    />
                    <Route path="/" exact component={Main} />

                    <Route component={Main} />
                </Switch>
            );
        }
        return (
            <div>
                <Layout>{routes}</Layout>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: localStorage.getItem("token") !== null,
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
