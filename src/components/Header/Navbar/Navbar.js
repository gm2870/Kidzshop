import React from "react";
import Grid from "@material-ui/core/Grid";
import priceTag from "../../../assets/images/price-tag.svg";

const navbar = () => (
    <nav className="header-nav">
        <Grid
            container
            direction="row"
            className="container"
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                <ul>
                    <li id="onSale">
                        <img src={priceTag} alt="price tag" />
                        <span>محصولات شگفت انگیز</span>
                    </li>
                    <li>
                        <span>خانه</span>
                    </li>
                    <li>
                        <span>پوشاک</span>
                    </li>
                    <li>
                        <span>کودک و اسباب بازی</span>
                    </li>
                    <li>
                        <span>مراقبت از کودک</span>
                    </li>
                </ul>
            </Grid>
            <Grid item>
                <ul>
                    <li>
                        <span>تماس با ما</span>
                    </li>
                    <li>
                        <span>فروشگاه</span>
                    </li>
                    <li>
                        <span>وبلاگ</span>
                    </li>
                    <li>
                        <span>درباره ما</span>
                    </li>
                </ul>
            </Grid>
        </Grid>
    </nav>
);
export default navbar;
