import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import CardView from '../../UI/CardView/CardView';
import {connect} from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner'
import * as actions from '../../../store/actions/index';
class Popular extends Component {
   
    componentDidMount(){
        this.props.onGetPopular();
    }
    
    incrementHandler = (id)=> {
        this.props.onIncrement(id);
    }
    decrementHandler = (id)=> {
        this.props.onDecrement(id);
    }

    render(){
        let products = <Spinner />
        if(this.props.isFetched){

        products = this.props.popularP.map((item,index) => (
            <CardView key = {item.objectId}
                image = {item.icon.url}
                alt = {item.imgAlt}
                title = {item.title}
                name = {item.name}
                price = {item.price}
                // incremented={this.props.onIncrement}
                // decremented={this.props.onDecrement}
                incremented = {() => {this.incrementHandler(item.objectId);this.qantityHandler(index)}} 
                decremented = {() => this.decrementHandler(item.objectId)} 
                // qty = {this.state.itemQty}   
            />
            ));
        }     
       
        return(
            <section className="popluar_section">
            <h1 style={{textAlign:'center',paddingTop:'50px'}}>محبوب ترین محصولات</h1>
            <p style={{textAlign:'center',margin:'10px 0'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است!</p>
            <Grid container direction="row" className="container">
              {products}
            </Grid>
        </section>
        );
    };
};
const mapStateToProps = state => {
    return {
        popularP:state.popular.popular,
        isFetched:state.popular.isFetched
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrement : (id) => dispatch(actions.incrementQty(id)),
        onDecrement : (id) => dispatch(actions.decrementQty(id)),
        onGetPopular: () => dispatch(actions.getPopularProducts())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Popular);