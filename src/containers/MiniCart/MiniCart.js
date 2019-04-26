import React , {Component} from 'react';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
class MiniCart extends Component {
    render(){
        console.log(this.props.items)
        let cartItems ;
             cartItems = this.props.items.map(item =>
                    <Grid className="cart_item_container" key={item.objectId} item container direction="row">
                        <Grid item><img style={{width:50}} src={item.icon.url} alt={item.imgAlt} /></Grid>
                        <Grid item style={{padding:"0 5px"}}><p>{item.name}</p><span style={{fontSize:12,margin:"0 5px"}}>{item.qty}x</span><span className="cart_item_price">{item.price}هزارتومان</span></Grid>
                        <Grid item className="remove_item">x</Grid>
                    </Grid>
                );

        return (
            <Grid container direction="column" id="miniCart">
                <Grid className="miniCartContainer">
                    <Paper style={{padding:15}}>
                    {this.props.totalQty === 0 ? <Grid className="empty_cart"><p id="empty_cart_text">سبد خرید خالی است</p></Grid>:null}
                        {cartItems}
                    </Paper>
                </Grid>
                
            </Grid>
        );
    };
};

const mapStateToProps = state => {
    return {
        items:state.popular.cart,
        totalQty:state.popular.totalQty
    }
}
export default connect(mapStateToProps)(MiniCart) ;