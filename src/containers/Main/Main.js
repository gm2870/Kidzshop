import React from "react";
import Axiliary from "../../hoc/Auxiliary/Auxiliary";
import Popular from "./Popular/Popular";
import ProductWithCarousel from "./ProductWithCarousel/ProductWithCarousel";
import Slider from "../../components/UI/Slider/Slider";
import Feature from "../../components/feature/feature";
const main = () => (
    <Axiliary>
        <Slider />
        <ProductWithCarousel />
        <Popular />
        <Feature />
    </Axiliary>
);
export default main;
