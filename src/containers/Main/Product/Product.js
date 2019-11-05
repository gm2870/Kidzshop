import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class Product extends React.Component {
    componentDidMount() {
        this.props.onGetProduct(this.props.match.params.id);
    }
    render() {
        return <div>{this.props.product.name}</div>;
    }
}
const mapStateToProps = state => ({
    product: state.product.product,
    error: state.product.error,
    isFetched: state.product.isFetched
});
const mapDispatchToProps = dispatch => ({
    onGetProduct: id => dispatch(actions.getProduct(id))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
