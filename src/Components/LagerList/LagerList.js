import React from 'react';
import Beers from '../../Utils/BeerLister';
import { withRouter } from "react-router-dom";

class LagerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    Beers.getLagers().then(beerItem => {
      this.setState({
        beers: beerItem
      })
    });
  }


  deleteItem(id) {
    Beers.deleteItem(id).then(() => {
      this.props.history.push('/#');
    });
  }

/*
  deleteItem() {
    Beers.deleteItem(this.state.beers.id).then(beer => {
      const stateBeer = JSON.parse(JSON.stringify(this.state.beers));
      this.setState({
        beers: JSON.parse(JSON.stringify(stateBeer))
      });
    });
  }
  */


  renderSortByOptions() {
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop
    return Object.keys(this.state.beers).map(beerType => {
      let beerTypeValue = this.state.beers[beerType];
      //returned the above value and appended LI elements on it, added a classname attribute to go wtih the css file, and an onClick listener event that binds  handlechange to it
      return <div className="Lager-Tile" key={beerTypeValue.id}><div className="delete-me"><span>Edit</span><span onClick={this.deleteItem.bind(this, beerTypeValue.id)}>X</span></div><h2>{beerTypeValue.name}</h2><img className="beerimg" src={beerTypeValue.imgUrl}/>
        <div className="Beer-information"><p>IBU: {beerTypeValue.ibu}</p><p>Alc. {beerTypeValue.percent}%</p></div><div className="location"><p>Brewed in: {beerTypeValue.location}</p></div><div className="beerdesc"><p>{beerTypeValue.description}</p></div></div>;
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


export default withRouter(LagerList);
