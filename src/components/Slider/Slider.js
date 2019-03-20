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
                    <div>
                        <div>تابستان پسرانه</div>
                    </div>
                </Grid>
            </div>
        );
    }
}
export default Slider;