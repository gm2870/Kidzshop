import React, { Component } from "react";
import Axiliary from "../Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
class Layout extends Component {
    componentDidMount() {
        axios
            .post(
                "http://localhost/laravel_kidzshop_backend/public/api/sessionStart"
            )
            .then(response => {
                sessionStorage.setItem("session_id", response.data.session_id);
            });
    }
    render() {
        return (
            <Axiliary>
                <Header isAuthenticated={this.props.isAuthenticated} />
                <main>{this.props.children}</main>
                <Footer />
            </Axiliary>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
