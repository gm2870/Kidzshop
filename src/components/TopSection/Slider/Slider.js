import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import kid5 from '../../assets/images/kid5.png'
class Slider extends Component {
    render () {
        return (
            <div className="slider_container">
                <Grid container direction="row" justify="center"  alignItems="center">
                    <div className="slider_images">
                        <img src={kid5} alt="kid5"/>
                    </div>
                    {/* <div className="slider_text">
                        <div className="slider_text_header1">تابستان پسرانه</div>
                        <div className="slider_text_header2">پوشاک و لباس</div>

                        <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </div>
                    </div>
                    <div><button className="moreButton">نمایش بیشتر</button></div> */}
                </Grid>
            </div>
        );
    }
}
export default Slider;