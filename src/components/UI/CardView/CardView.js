import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { Link } from "react-router-dom";
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingBasket from "@material-ui/icons/ShoppingCart";
import { backendBaseUrl } from "../../../shared/utility";
class CardView extends Component {
    render() {
        return (
            <Auxiliary>
                <Grid className="product_body" item xs={12} sm={6} md={3}>
                    <Link to={`/product/${this.props.id}`}>
                        <Grid className="cardView_body">
                            <Grid className="product_image">
                                <img
                                    src={`${backendBaseUrl}/images/${this.props.image}`}
                                    alt={this.props.name}
                                />
                            </Grid>
                            <Grid className="product_detatils_body">
                                <Grid className="product_title">
                                    <p>{this.props.category}</p>
                                </Grid>
                                <Grid className="product_name">
                                    <p>{this.props.name}</p>
                                    <span
                                        style={{ fontSize: 12, color: "blue" }}
                                    >
                                        موجودی در انبار:
                                    </span>
                                    <span style={{ fontSize: 10 }}>
                                        {this.props.availableQty}
                                    </span>
                                </Grid>
                                <Grid className="product_price">
                                    <span style={{ marginLeft: 5 }}>
                                        {this.props.price}
                                    </span>
                                    <span>هزار تومان</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>
                    <Grid className="addToCart_container">
                        <Grid className="addToCart_btn_container">
                            <button
                                className="btn btn--main addToCart_btn"
                                onClick={this.props.addedToCart}
                            >
                                <ShoppingBasket
                                    style={{
                                        verticalAlign: "middle",
                                        margin: "0 5px"
                                    }}
                                />
                                {!this.props.added ? (
                                    <span>افزودن به سبد خرید</span>
                                ) : (
                                    <span>مشاهده سبد خرید</span>
                                )}
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </Auxiliary>
        );
    }
}

export default CardView;
