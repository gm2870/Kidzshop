import React , {Component} from 'react';
import Axiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';
class Layout extends Component {
    render() {
        return(
            <Axiliary>
                <Header isAuthenticated={this.props.isAuthenticated} />
                <main>
                    {this.props.children}
                </main>
            </Axiliary>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        isAuthenticated :state.auth.token !== null
    };
};
  
export default connect(mapStateToProps)(Layout) ;