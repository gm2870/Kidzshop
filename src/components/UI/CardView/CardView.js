import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { backendBaseUrl } from "../../../shared/utility";
class CardView extends Component {
    render() {
        return (
            <React.Fragment>
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
                </Grid>
            </React.Fragment>
        );
    }
}

export default CardView;
