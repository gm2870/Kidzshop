import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
const footer = () => (
    <React.Fragment>
        <footer className="footer">
            <Grid container direction="row">
                <Grid item xs={6} sm={3} className="footer-menu-container">
                    <h2>لینک محصولات</h2>

                    <ul className="menu">
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                کالکشن های جدید
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                تیشرت پسرانه
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                تیشرت دخترانه
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                ژاکت
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                سویتشرت
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                ساعت
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                کوله پشتی
                            </Link>
                        </li>
                    </ul>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <h2>حساب مشتری</h2>
                    <ul className="menu">
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                ورود
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                ایجاد حساب کاربری
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                برنامه ارجاع
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                سبد خرید من
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                لیست محصولات
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                محبوب
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                بازدید اخیر
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <h2>درباره ما</h2>
                    <ul className="menu">
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                تماس با ما
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                تماس با شرکت
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                تبلیغات با ما
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                پشتیبانی مشتریان
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                شرایط و ضوابط
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                حریم شخصی
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                ملاقات با ما
                            </Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <h2>کمک احتیاج دارید؟</h2>
                    <ul className="menu">
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                ارتباط با ما 36146961 (051)
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" to="">
                                یا به ایمیل yourname@namesite.com
                            </Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </footer>
    </React.Fragment>
);
export default footer;
