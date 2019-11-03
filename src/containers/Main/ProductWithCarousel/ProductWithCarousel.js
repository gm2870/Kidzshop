import React from "react";
import { Grid, Typography } from "@material-ui/core";
// import Tshirt1 from "../../../assets/images/T-shirt1.png";
import product2 from "../../../assets/images/product2.jpg";
import CSSTransition from "react-transition-group/CSSTransition";
import products from "./products";
class ProductWithCarousel extends React.Component {
    state = {
        activeIndex: 0,
        appearHome: true,
        property: products.properties[0],
        fadeClass: "fade",
        items: [1, 2, 3]
    };

    activeCarouselHandler = index => () => {
        this.setState({
            activeIndex: index,
            property: products.properties[index]
        });
    };
    render() {
        const { appearHome, fadeClass, property } = this.state;

        const items = this.state.items.map((item, index) => (
            <span
                key={index}
                className={index === this.state.activeIndex ? "active" : ""}
                onClick={this.activeCarouselHandler(index)}
            ></span>
        ));
        return (
            <section className="carousel">
                <Grid container className="container" direction="row">
                    <Grid xs={12} md={8} item className="carousel__container">
                        <CSSTransition
                            key={property.id}
                            in={appearHome}
                            appear={true}
                            classNames="fade"
                            mountOnEnter
                            unmountOnExit
                            timeout={8000}
                        >
                            <Grid item container className="carousel__box">
                                <Grid item xs={5} className="carousel__image">
                                    <img
                                        className={fadeClass}
                                        src={property.src}
                                        alt={property.alt}
                                    />
                                </Grid>
                                <Grid
                                    container
                                    item
                                    direction="column"
                                    xs={7}
                                    className="carousel__inner"
                                >
                                    <Typography variant="h4">
                                        انواع لباس دخترانه
                                    </Typography>
                                    <Typography variant="h2">
                                        {property.title}
                                    </Typography>
                                    <Typography variant="h3">
                                        {property.price} هزار تومان
                                        <p className="deliveryText">
                                            ارسال سریع و رایگان
                                        </p>
                                    </Typography>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی
                                        نامفهوم از صنعت چاپ و با استفاده از
                                        طراحان گرافیک است!
                                    </p>
                                </Grid>
                                <div className="carousel__dots">{items}</div>
                            </Grid>
                        </CSSTransition>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        xs={12}
                        md={4}
                        className="onSale"
                    >
                        <img src={product2} alt="product2" />
                        <Grid
                            item
                            container
                            direction="row"
                            justify="space-between"
                            style={{ padding: "19px 70px 0 50px" }}
                        >
                            <Typography variant="h4">
                                <span>پلیور نارنجی خنک</span>
                            </Typography>
                            <Typography variant="h5">
                                <span style={{ color: "rgb(185, 45, 94)" }}>
                                    13 هزار تومان
                                </span>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justify="flex-end"
                            style={{ padding: "0 50px" }}
                        >
                            <del style={{ color: "gray" }}>17 هزار تومان</del>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    }
}
export default ProductWithCarousel;
