import React from 'react';

class AleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: {
        title: 'Rickards Red',
        type: 'Lager',
        price: '$3.00',
        img: ''
      }
    };
  }
  render() {
    return (
      <div className='Beer-List'>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
        <div className="Lager-Tile">
          <h2>{this.state.beers.title}</h2>
          <img src={require('./beer.jpg')} />
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AleList;