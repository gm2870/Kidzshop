import React , {Component} from 'react';
import Axiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header'
import Navabar from '../../components/Header/Navbar'
import Slider from '../../components/Slider/Slider'
class Layout extends Component {
    render() {
        return(
            <Axiliary>
               <Header />
               <Navabar />
               <Slider />
            </Axiliary>
        );
    }
}
export default Layout;