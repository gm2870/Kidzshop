import React from 'react';
import Axiliary from '../../hoc/Auxiliary/Auxiliary';
import Popular from './Popular/Popular'
import ProductWithCarousel from './ProductWithCarousel/ProductWithCarousel';
import Slider from '../../components/UI/Slider/Slider';
const main = () => (
    <Axiliary>
        <Slider />
        <ProductWithCarousel />
        <Popular />
    </Axiliary>
);
export default main ;