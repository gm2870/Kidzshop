import React from 'react';
import TopHead from './TopHead/TopHead';
import Navbar from './Navbar/Navbar';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const Header = () => {
    return(
        <Auxiliary>
            <TopHead />
            <Navbar />
        </Auxiliary>
    );
    };
export default Header;