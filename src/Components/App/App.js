import React from 'react';
import { Link, HashRouter as Router, Route } from 'react-router-dom';
import history from './history';
import Title from '../Title/Title'
import LagerList from '../LagerList/LagerList'
import AleList from '../AleList/AleList'
import PilsnerList from '../PilsnerList/PilsnerList'
import StoutList from '../StoutList/StoutList'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div>
            <Route exact path="/" component={Title} />
            <Route path="/lagers" component={LagerList} />
            <Route path="/ales" component={AleList} />
            <Route path="/pilsner" component={PilsnerList} />
            <Route path="/stout" component={StoutList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
