import React , {Component} from 'react';
import Axiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/TopSection/Header/Header';
import Navbar from '../../components/TopSection/Header/Navbar';
import Slider from '../../components/TopSection/Slider/Slider'

class Layout extends Component {
    render() {
        return(
            <Axiliary>
                <Header />
                <Navbar />
                <Slider />
            </Axiliary>
        );
    }
}
export default Layout;