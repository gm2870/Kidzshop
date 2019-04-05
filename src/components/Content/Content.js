import React from 'react';
import Slider from './Slider/Slider';
import Main from './Main/Main';
import Axiliary from '../../hoc/Auxiliary/Auxiliary';
import Popular from './Popular/Popular'
const Content = () => (
    <Axiliary>
        <Slider />
        <Main />
        <Popular />
    </Axiliary>
);
export default Content ;