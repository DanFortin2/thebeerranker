import React from 'react';
import './Title.css';
import Lager from '../Lager/Lager';

let beerTypes = {
  'Lager': 'Lager',
  'Stout': 'Stout',
  'Pilsner': 'Pilsner',
  'Ale': 'Ale'
};


class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sortBy: ''};
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }



  renderSortByOptions() {
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop
    return Object.keys(beerTypes).map(beerType => {
      let beerTypeValue = beerTypes[beerType];
      //returned the above value and appended LI elements on it, added a classname attribute to go wtih the css file, and an onClick listener event that binds  handlechange to it
      return <li className={this.getSortByClass(beerTypeValue)} onClick={this.handleSortByChange.bind(this, beerTypeValue)} key={beerTypeValue}>{beerType}</li>;
    });
  }

  handleSortByChange(beerType) {
    this.setState({
      sortBy: beerType
    });
  }

  getSortByClass(beerType) {
    if(this.state.sortBy === beerType) {
      return 'active'
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="Title">
        <header className="Title-header">
          <div>
            <h1>The Beer Ranker</h1>
          </div>
          <div>
            <ul className='Beer-Types' onClick={this.handleSortChangeAutoSearch}>
              {this.renderSortByOptions()}
            </ul>
          </div>
        </header>
        <div className = "HomePage">
          <Lager  sortBy={this.state.sortBy}/>
        </div>
      </div>
    );
  }
}

export default Title;
