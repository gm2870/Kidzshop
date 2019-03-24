import React from 'react';
import TopHead from './TopHead/TopHead';
import Navbar from './Navbar/Navbar';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const Header = (props) => {
    return(
        <Auxiliary>
        <TopHead />
        <Navbar />
    </Auxiliary>
    )
    };
export default Header;