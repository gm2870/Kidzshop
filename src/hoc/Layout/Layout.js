import React, { Component } from "react";
import Axiliary from "../Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import Footer from "../../components/Footer/Footer";
class Layout extends Component {
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
        isAuthenticated: localStorage.getItem("token") !== null
    };
};

export default connect(mapStateToProps)(Layout);
