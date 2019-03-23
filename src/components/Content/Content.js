import React from 'react';
import Slider from './Slider/Slider';
import Main from './Main/Main';
import Axiliary from '../../hoc/Auxiliary/Auxiliary';

const Content = () => (
    <Axiliary>
        <Slider />
        <Main />
    </Axiliary>
);
export default Content ;