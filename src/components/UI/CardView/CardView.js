import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingBasket from '@material-ui/icons/ShoppingCart';
class CardView extends Component {
  
    render(){
        return(
            <Auxiliary>
                <Grid className='product_body' item xs={12} sm={6} md={3}>
                    <Grid className="cardView_body">
                        <Grid className='product_image'><img src={this.props.image}  alt={this.props.alt} /></Grid>
                        <Grid className='product_detatils_body'>
                            <Grid className='product_title'><p>{this.props.title}</p></Grid>
                            <Grid className='product_name'><p>{this.props.name}</p><span style={{fontSize:12,color:'blue'}}>موجودی در انبار:</span><span style={{fontSize:10}}>{this.props.availableQty}</span></Grid>
                            <Grid className='product_price'><span style={{marginLeft:5}}>{this.props.price}</span><span>هزار تومان</span></Grid>
                        </Grid>
                        <Grid className='addToCart_container'>
                            <Grid container direction='row'>
                                <ul className='addItem_container'>
                                    <li onClick={this.props.incremented}>
                                        <Fab disabled={this.props.availableQty<=this.props.qty} style={{width:35,height:35}} color='primary' aria-label="Add" ><AddIcon /></Fab>
                                    </li>
                                    <li><span className='product_qty'>{this.props.qty}</span></li>
                                    <li onClick={this.props.decremented}><Fab disabled={this.props.qty<=1}  style={{width:35,height:35}} color='secondary' aria-label="Remove" ><RemoveIcon /></Fab></li>
                                </ul>
                            </Grid>
                            <Grid className='addToCart_btn_container'>
                                <button className='addToCart_btn'><ShoppingBasket style={{verticalAlign:'middle',margin:'0 5px'}}/><span>افزودن به سبد خرید</span></button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Auxiliary>
        );
    }
};

export default CardView;