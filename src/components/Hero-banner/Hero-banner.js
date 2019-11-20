import React from "react";
import { Grid, Link } from "@material-ui/core";
import featureBoy from "../../assets/images/feature-boy.png";
import featureGirl from "../../assets/images/feature-girl.png";
const heroBanner = () => (
    <React.Fragment>
        <section className="heroBanner">
            <Grid container direction="row">
                <div className="heroBanner__inner">
                    <div className="heroBanner__caption">
                        <h2 className="heroBanner__heading">
                            بازی همراه با مد روز
                        </h2>
                        <p className="heroBanner__paragraph">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد.
                        </p>
                        <button className="btn btn--more heroBanner__btn">
                            خرید فروشگاه
                            <span id="left_arrow_symbol">&larr;</span>
                        </button>
                    </div>
                </div>
            </Grid>
        </section>
        <section className="category">
            <Grid container direction="row" className="category-container">
                <Grid item xs={12} md={6} className="boy">
                    <div className="boy-inner">
                        <Link to="/">
                            <div className="category-image category-image--boy">
                                <img src={featureBoy} alt="مد پسرانه" />
                            </div>
                            <div className="category-caption">
                                <h2>مد پسرانه</h2>
                                <p>14-5 سال</p>
                            </div>
                        </Link>
                    </div>
                </Grid>
                <Grid xs={12} md={6} item className="girl">
                    <div className="girl-inner">
                        <Link to="/">
                            <div className="category-image category-image--girl">
                                <img src={featureGirl} alt="مد دخترانه" />
                            </div>
                            <div className="category-caption">
                                <h2>مد دخترانه</h2>
                                <p>14-5 سال</p>
                            </div>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </section>
    </React.Fragment>
);
export default heroBanner;
