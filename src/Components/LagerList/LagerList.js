import React from 'react';
import Beers from '../../Utils/BeerLister'


class LagerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    Beers.getBeers().then(beerItem => {
      this.setState({
        beers: beerItem
      })
    });
  }

  renderSortByOptions() {
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop
    return Object.keys(this.state.beers).map(beerType => {
      let beerTypeValue = this.state.beers[beerType];
      console.log(beerTypeValue.imgUrl);
      //returned the above value and appended LI elements on it, added a classname attribute to go wtih the css file, and an onClick listener event that binds  handlechange to it
      return <div className="Lager-Tile" key={beerTypeValue.id}><h2>{beerTypeValue.name}</h2><img src={beerTypeValue.imgUrl}/>
        <div className="Beer-information"><p>{beerTypeValue.id}</p><p>{beerTypeValue.price}</p></div></div>;
    });
  }

  render() {
    return (
      <div className='Beer-List'>
        {this.renderSortByOptions()}
      </div>
    );
  }
}


export default LagerList;
