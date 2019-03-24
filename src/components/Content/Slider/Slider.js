import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import kid5 from '../../../assets/images/kid5.png';
class Slider extends Component {
    render () {
        return (
            <div className="slider_container">
                <Grid container direction="row" justify="center"  alignItems="center">
                    <div className="slider_images">
                        <img src={kid5} alt="kid5" className="animated_img"/>
                    </div>
                    <div className="leftSide_slider">
                        <div className="slider_text">
                            <div className="slider_text_header1 animated_text">تابستان پسرانه</div>
                            <div className="slider_text_header2 animated_text">پوشاک و لباس</div>

                            <h3 className="slider_sub_text animated_text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </h3>
                        </div>
                        <div className="moreButton_div animated_text"><button className="moreButton">نمایش بیشتر <span id="left_arrow_symbol">&larr;</span></button></div>
                    </div>

                </Grid>
            </div>
        );
    }
}
export default Slider;