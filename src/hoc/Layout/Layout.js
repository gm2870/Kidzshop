import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import Footer from "../../components/Footer/Footer";
class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header isAuthenticated={this.props.isAuthenticated} />
                {this.props.children}
                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: localStorage.getItem("token") !== null
    };
};

export default connect(mapStateToProps)(Layout);
