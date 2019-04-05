import React from 'react';
import {Grid , Typography} from '@material-ui/core';
import Tshirt1 from '../../../assets/images/T-shirt1.png';
import product2 from '../../../assets/images/product2.jpg';
const Main = () => (
    <main style={{backgroundColor:"#fafafa",padding:"110px 0"}}>
        <Grid container className="container" alignItems="center"  direction="row">
            <Grid xs={12} md={8} item style={{padding:'0 25px'}}>
                <Grid  item container  style={{backgroundColor:"#fff",border:"1px solid lightgray"}}>
                    <Grid item md={4}><img style={{maxWidth:"100%",maxHeight:'100%'}} src={Tshirt1} alt="Tshirt1"  /></Grid>
                    <Grid container item direction="column" md={8} style={{padding:'70px 20px'}}>
                        <Typography variant="h4"><span>انواع لباس دخترانه</span></Typography>
                        <Typography variant="h2" style={{margin:'20px 0'}}><span style={{lineHeight: "50px",color:'rgb(58, 58, 58)'}}>تیشرت دخترانه صورتی</span></Typography>
                        <Typography variant="h3" style={{color:'rgb(185, 45, 94)',fontWeight:900}}><span>299</span><span>هزار تومان</span><span style={{backgroundColor:'rgb(253, 234, 69)',fontSize:12,color:'rgb(58, 58, 58)',padding:'0 10px',borderRadius:'0 0 0 13px'}}>ارسال سریع و رایگان</span></Typography>
                        <Typography variant="h5" style={{margin:'20px 0'}}><span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است! </span></Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" xs={12} md={4} style={{border:"1px solid lightgray",padding:'5px 0'}}>
                <Grid item ><img src={product2} style={{display:'block',margin:'auto',maxWidth:'100%'}} alt="product2" /></Grid>
                <Grid item container direction="row" justify="space-between" style={{padding:'19px 70px 0 50px'}}>
                    <Typography variant="h4"><span>پلیور نارنجی خنک</span></Typography>
                    <Typography variant="h5"><span style={{color:'rgb(185, 45, 94)'}}>13 هزار تومان</span></Typography>
                </Grid>
                <Grid item container justify="flex-end" style={{padding:'0 50px'}}><del style={{color:'gray'}}>17 هزار تومان</del></Grid>
            </Grid>
        </Grid>
    </main>
);
export default Main;