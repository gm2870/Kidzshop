import React from 'react';
import {Grid} from '@material-ui/core';

const addToCart = () => (
    <Grid>
        <Grid container direction='row'>
            <ul>
                <li><button>+</button></li>
                <li><span>1</span></li>
                <li><button>-</button></li>
            </ul>
        </Grid>
        <Grid>
            <button>افزودن به سبد خرید</button>
        </Grid>
    </Grid>
);
export default addToCart;