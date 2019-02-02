import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

class LagerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: {
        title: 'Molson Canadian',
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
          <Image source={require('./beer.jpg')}/>
          <p>Crisp smooth taste. Best served cold</p>
          <div className="Beer-information">
            <p>{this.state.beers.type}</p>
            <p>{this.state.beers.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LagerList;
