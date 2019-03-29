import React from 'react';
import { Link, HashRouter as Router, Route} from 'react-router-dom';
import History from './history';
import Title from '../Title/Title'
import LagerList from '../LagerList/LagerList'
import AleList from '../AleList/AleList'
import PilsnerList from '../PilsnerList/PilsnerList'
import StoutList from '../StoutList/StoutList'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router history={History}>
        <div className="App">
            <Route exact path="/" component={Title} />
            <Route path="/lagers/id" component={LagerList} />
            <Route path="/ales" component={AleList} />
            <Route path="/pilsners" component={PilsnerList} />
            <Route path="/stouts" component={StoutList} />
        </div>
      </Router>
    );
  }
}

export default App;
