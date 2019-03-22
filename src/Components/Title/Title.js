import React from 'react';
import BeerType from '../BeerType/BeerType';
import AddBeer from '../AddBeer/AddBeer';

let beerTypes = {
  'Lager': 'Lager',
  'Stout': 'Stout',
  'Pilsner': 'Pilsner',
  'Ale': 'Ale'
};


class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
      showAddBeerScreen: false
    };
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.generateAddBeerScreen = this.generateAddBeerScreen.bind(this);
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

  generateAddBeerScreen() {
    this.setState({
      showAddBeerScreen: true
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
          <div className='Add-Beer'>
            <span className='plus-icon' onClick={this.generateAddBeerScreen}>+</span>
          </div>
        </header>
        <div className = "HomePage">
          <BeerType  sortBy={this.state.sortBy}/>
          <AddBeer show={this.state.showAddBeerScreen}/>
        </div>
      </div>
    );
  }
}

export default Title;
