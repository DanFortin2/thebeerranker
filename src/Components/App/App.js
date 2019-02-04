import React from 'react';
import { Link, HashRouter as Router, Route } from 'react-router-dom';
import history from './history';
import Title from '../Title/Title'
import LagerList from '../LagerList/LagerList'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div>
            <Route exact path="/" component={Title} />
            <Route path="/beers" component={LagerList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
