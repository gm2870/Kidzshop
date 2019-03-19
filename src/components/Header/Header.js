import React from 'react';
import './Header.scss'
import Grid from '@material-ui/core/Grid';
const header = (props) => (
    <header className="header">
        <div className="container">
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <div id="logo">    
                    کیدزشاپ
                </div>
            </Grid>
            <Grid>
                <div>
                    <span>همه دسته بندی ها</span>
                </div> 
            </Grid>
        </Grid>

        
          
        </div>
    </header>
);
export default header ;