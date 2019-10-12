import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Auth from './containers/Auth/Auth';
import UserAccount from './containers/UserAccount/UserAccount';
import Main from './containers/Main/Main';
import {Route, Switch , withRouter} from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index'
class App extends Component {
  componentDidMount() {
    this.props.onTryStayLoggedin();
  }
  render() {
    return ( 
      <div>
        <Layout>
            <Switch>
                <Route path="/users/login" component={Auth} />
                <Route path="/users/register" component={Auth} />
                <Route path="/users/my-account" component={UserAccount} />
                <Route path="/logout" component={Logout} />
                <Route path="/" exact component={Main} />
                <Route component={Main} />
            </Switch>
        </Layout>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryStayLoggedin: () => dispatch(actions.authCheckState())
  }
};

export default withRouter(connect(null,mapDispatchToProps)(App));
