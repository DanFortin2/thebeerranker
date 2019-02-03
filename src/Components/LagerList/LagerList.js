import React from 'react';

class LagerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [{
        title: 'Lager',
        type: 'Pilsner',
        price: '$3.00',
        img: require('./beer.jpg')
      },
      {
        title: 'Lager',
        type: 'Pilsner',
        price: '$3.00',
        img: require('./beer.jpg')
      },
      {
        title: 'Lager',
        type: 'Pilsner',
        price: '$3.00',
        img: require('./beer.jpg')
      },
      {
        title: 'Lager',
        type: 'Pilsner',
        price: '$3.00',
        img: require('./beer.jpg')
      }]
    };
  }

  renderSortByOptions() {
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop
    return Object.keys(this.state.beers).map(beerType => {
      let beerTypeValue = this.state.beers[beerType];
      //returned the above value and appended LI elements on it, added a classname attribute to go wtih the css file, and an onClick listener event that binds  handlechange to it
      return <div className="Lager-Tile"><h2>{beerTypeValue.title}</h2><img src={beerTypeValue.img}/>
        <div className="Beer-information"><p>{beerTypeValue.type}</p><p>{beerTypeValue.price}</p></div></div>;
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
