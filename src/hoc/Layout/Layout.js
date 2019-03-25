import React , {Component} from 'react';
import Axiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';

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