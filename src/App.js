import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';
import confirgureStore from './store';
import './styles/App.css';
import LandingPage from './views/landingPage';
import Notfound from './views/notfound';
import Signup from './views/Signup';
import Signin from './views/signin';

const store = confirgureStore();

const App = () => {
    return(
        <Provider store={store}>
            <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/index" component={LandingPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Signin} />
            <Route component={Notfound} />
            <Route exact path="/404" component={Notfound} />
          </Switch>
        </Router>
      </Provider>
    )
};

export default App