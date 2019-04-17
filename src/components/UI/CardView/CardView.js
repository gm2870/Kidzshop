import React from 'react';
import {Grid} from '@material-ui/core';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingBasket from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index'
const cardView = (props) => {
    const styles = {
        fab: {
            width: 35, height: 35,
        }
    };
    return(
        <Auxiliary>
            <Grid className='product_body' item xs={12} sm={6} md={3}>
                <Grid className="cardView_body">
                    <Grid className='product_image'><img src={props.image}  alt={props.alt} /></Grid>
                    <Grid className='product_detatils_body'>
                        <Grid className='product_title'><p>{props.title}</p></Grid>
                        <Grid className='product_name'><p>{props.name}</p></Grid>
                        <Grid className='product_price'><span style={{marginLeft:5}}>{props.price}</span><span>هزار تومان</span></Grid>
                    </Grid>
                    <Grid className='addToCart_container'>
                        <Grid container direction='row'>
                            <ul className='addItem_container'>
                                <li onClick={props.onAddItem}>
                                    <Fab style={styles.fab} color='primary' aria-label="Add" ><AddIcon /></Fab>
                                </li>
                                <li><span className='product_qty'>{props.qty}</span></li>
                                <li><Fab style={styles.fab} color='secondary' aria-label="Remove" ><RemoveIcon /></Fab></li>
                            </ul>
                        </Grid>
                        <Grid className='addToCart_btn_container'>
                            <button className='addToCart_btn'><ShoppingBasket style={{verticalAlign:'middle',margin:'0 5px'}}/><span>افزودن به سبد خرید</span></button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Auxiliary>
    )
};
const mapStateToProps = state => {
    return {
        qty : state.itemQty.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddItem : (itemId) => dispatch(actions.addItem(itemId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cardView);