import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import Slider from '../Slider/Slider'

const topSection = () => (
    <Grid container>
        <Header />
        <Navbar />
        <Slider />
    </Grid>
);
export default topSection;