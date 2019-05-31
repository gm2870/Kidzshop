import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import imgs from './imgs';
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

class Slider extends Component {
    state={
        activeIndex:0,
        appearHome:true,
        property:imgs.properties[0]
    }
    componentDidMount(){
        let newIndex = null;
        this.interval = setInterval(() => {

            newIndex = this.state.property.index + 1
            console.log(this.state.property);
            this.setState({
                property:imgs.properties[newIndex]
            });
            if(newIndex==3){
                
                this.setState({property:imgs.properties[0]});
            }
            // console.log(this.state.property);

          }, 2000);
         
    }
    render () {
        const {appearHome,property} = this.state

        let imgItems = 
        (
            <TransitionGroup>
                <CSSTransition  key={property.id} in={appearHome} appear={true} classNames='fade' timeout={2000}>
                    <img src={property.src} alt={property.alt} />
                </CSSTransition>
            </TransitionGroup>
        )
     
        return (
            <div className="slider_container">
                <Grid container direction="row" justify="center"  alignItems="center">
                    {imgItems}
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