import React from "react";
import Axiliary from "../../hoc/Auxiliary/Auxiliary";
import Popular from "./Popular/Popular";
import ProductWithCarousel from "./ProductWithCarousel/ProductWithCarousel";
import Slider from "../../components/UI/Slider/Slider";
import HeroBanner from "../../components/Hero-banner/Hero-banner";
const main = () => (
    <Axiliary>
        <Slider />
        <ProductWithCarousel />
        <Popular />
        <HeroBanner />
    </Axiliary>
);
export default main;
