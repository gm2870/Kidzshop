import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Content from './components/Content/Content';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return ( 
      <div>
        <Layout >
          <Switch>
            <Route path="/users/login" component={Auth} />
            <Route path="/users/register" component={Auth} />
            <Route path="/" exact component={Content} />
          </Switch>

        </Layout>
      </div>
    );
  }
}
export default App;
