import React , {Component} from 'react';
import Axiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
// import Header from '../../components/TopSection/Header/Header';
// import Navbar from '../../components/TopSection/Header/Navbar';

class Layout extends Component {
    render() {
        return(
            <Axiliary>
                <Header />
                <main>
                    {this.props.children}
                </main>
            </Axiliary>
        );
    }
}
export default Layout;