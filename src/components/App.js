import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'

class App extends React.Component {
  render () {
    return(
      <div className="App">
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

