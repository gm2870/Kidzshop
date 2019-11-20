import React from "react";
import Popular from "./Popular/Popular";
import ProductWithCarousel from "./ProductWithCarousel/ProductWithCarousel";
import Slider from "../../components/UI/Slider/Slider";
import HeroBanner from "../../components/Hero-banner/Hero-banner";
const main = () => (
    <React.Fragment>
        <Slider />
        <ProductWithCarousel />
        <Popular />
        <HeroBanner />
    </React.Fragment>
);
export default main;
