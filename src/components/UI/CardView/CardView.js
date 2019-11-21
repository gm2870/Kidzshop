import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { backendBaseUrl } from "../../../shared/utility";
class CardView extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid item xs={12} sm={6} md={3}>
                    <Link to={`/product/${this.props.id}`}>
                        <div className="card">
                            <img
                                className="card__image"
                                src={`${backendBaseUrl}/images/${this.props.image}`}
                                alt={this.props.name}
                            />
                            <div className="card__details">
                                <p className="card__details-title">
                                    {this.props.category}
                                </p>
                                <div className="card__details-name">
                                    <p>{this.props.name}</p>
                                    <span
                                        style={{ fontSize: 12, color: "blue" }}
                                    >
                                        موجودی در انبار:
                                    </span>
                                    <span style={{ fontSize: 10 }}>
                                        {this.props.availableQty}
                                    </span>
                                </div>
                                <div className="card__details-price">
                                    <span style={{ marginLeft: 5 }}>
                                        {this.props.price}
                                    </span>
                                    <span>هزار تومان</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Grid>
            </React.Fragment>
        );
    }
}

export default CardView;
