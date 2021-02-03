import React from 'react';
import Navbar from './Navbar';
import Shop from './Shop';
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
              <Route path="/" exact component={Shop} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

