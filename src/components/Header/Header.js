import React from 'react';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


const header = (props) => (
    <header className="header">
        <Grid container direction="row" className="container"  alignItems="center">
            <Grid item>
                <div id="logo">    
                    <span>کیدزشاپ</span>
                </div>
            </Grid>
            <Grid item className="categories">
                <span>همه دسته بندی ها</span>
                <KeyboardArrowDown style={{verticalAlign:"middle"}} />
            </Grid>
            <Grid>
                <form role="search" method="get">
                    <TextField>

                    </TextField>
                </form>
            </Grid>
        </Grid>
    </header>
);
export default header ;