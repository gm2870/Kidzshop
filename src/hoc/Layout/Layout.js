import React , {Component} from 'react';
import Axiliary from '../Auxiliary/Auxiliary';
import TopSection from '../../components/TopSection/TopSection';
class Layout extends Component {
    render() {
        return(
            <Axiliary>
               <TopSection />
            </Axiliary>
        );
    }
}
export default Layout;