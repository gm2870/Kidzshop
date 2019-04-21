import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import CardView from '../../UI/CardView/CardView';
import {connect} from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner'
import * as actions from '../../../store/actions/index';
class Popular extends Component {
    constructor(props) {
        super(props)
        console.log('constructor');
      }
    componentWillMount() {
        console.log('will');  
    }
    componentDidMount(){
        console.log('did');
        this.props.onGetPopular();
    }
    products = {
        popular:{
            p1:{
                title:'لباس',
                name:'لباس دخترانه رنگی',
                price:20,
                image:require('../../../assets/images/shirt1.jpg'),
                alt:"shirt1"
            },
            p2:{
                title:'تیشرت',
                name:'تیشرت سفید طرح دار',
                price:30,
                image:require('../../../assets/images/shirt2.jpg'),
                alt:"shirt2"
            },
            p3:{
                title:'تیشرت',
                name:'تیشرت پسرانه سورمه ای',
                price:40,
                image:require('../../../assets/images/shirt3.jpg'),
                alt:"shirt3"
            },
            p4:{
                title:'لباس',
                name:'لباس زرد',
                price:40,
                image:require('../../../assets/images/shirt4.jpg'),
                alt:"shirt4"
            },   
            p5:{
                title:'لباس دخترانه',
                name:'لباس',
                price:50,
                image:require('../../../assets/images/dress1.jpg'),
                alt:"shirt5"
            },  
            p6:{
                title:'تیشرت',
                name:'تیشرت فرایدی',
                price:60,
                image:require('../../../assets/images/shirt6.jpg'),
                alt:"shirt6"
            },
            p7:{
                title:'لباس دخترانه',
                name:'دانکر آبی دخترانه',
                price:70,
                image:require('../../../assets/images/cozie.jpg'),
                alt:"cozie"
            },
            p8:{
                title:'تیشرت',
                name:'تیشرت قرمز',
                price:80,
                image:require('../../../assets/images/shirt7.jpg'),
                alt:"shirt7"
            },
        }
    }
    render(){
           let products = <Spinner />
           if(this.props.isFetched){

             products = this.props.pp.map(item => (
            <CardView key={item.objectId}
                image={item.icon.url}
                alt={item.imgAlt}
                title={item.title}
                name={item.name}
                price={item.price}
                added = {() => this.props.onAddItem(item.id)}    
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
        qty : state.itemQty.items,
        pp:state.popular.popular,
        isFetched:state.popular.isFetched
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAddItem : (id) => dispatch(actions.addItem(id)),
        onGetPopular: () => dispatch(actions.getPopular())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Popular);