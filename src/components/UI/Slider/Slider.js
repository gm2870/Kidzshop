import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import imgs from "./imgs";
import CSSTransition from "react-transition-group/CSSTransition";
import Paragraph from "../TypeEffect/Paragraph";
// import TransitionGroup from "react-transition-group/TransitionGroup";
// import CSSTransition from "react-transition-group/CSSTransition";

class Slider extends Component {
    state = {
        activeIndex: 0,
        appearHome: true,
        property: imgs.properties[0],
        fadeClass: "fade",
        setInt: null
    };
    componentDidMount() {
        this.startSlideShow();
    }
    startSlideShow = () => {
        this.setInt = setInterval(() => {
            this.setState({
                activeIndex:
                    (this.state.activeIndex + 1) % imgs.properties.length,
                property: imgs.properties[this.state.activeIndex]
            });
        }, 4000);
    };
    componentWillUnmount() {
        clearInterval(this.setInt);
    }
    render() {
        const { appearHome, fadeClass, property } = this.state;

        let imgItems = (
            <CSSTransition
                key={property.id}
                in={appearHome}
                appear={true}
                classNames="fade"
                mountOnEnter
                unmountOnExit
                timeout={8000}
            >
                <img
                    className={fadeClass}
                    src={property.src}
                    alt={property.alt}
                />
            </CSSTransition>
        );

        return (
            <div className="slider">
                <Grid
                    className="row"
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <div className="slider__images">{imgItems}</div>
                    <div className="slider__leftSide">
                        <div className="slider__text">
                            <div className="slider__text--header1 animated_text">
                                تابستان پسرانه
                            </div>
                            <div className="slider__text--header2 animated_text">
                                پوشاک و لباس
                            </div>
                            <Paragraph />
                        </div>

                        <div className="moreButton_div animated_text">
                            <button className="btn btn--more moreButton">
                                نمایش بیشتر
                                <span id="left_arrow_symbol">&larr;</span>
                            </button>
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}
export default Slider;
