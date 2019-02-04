import React from 'react';
import LagerList from '../LagerList/LagerList';
import AleList from '../AleList/AleList';
import PilsnerList from '../PilsnerList/PilsnerList';
import StoutList from '../StoutList/StoutList';

class BeerType extends React.Component {
  renderBeerOptions() {
    if(this.props.sortBy === 'Lager') {
      return <LagerList />;
    } else if(this.props.sortBy === 'Ale') {
      return <AleList />;
    } else if(this.props.sortBy === 'Pilsner') {
      return <PilsnerList />;
    } else if(this.props.sortBy === 'Stout') {
      return <StoutList />;
    }
  }
  render() {
    return (
      <div className='Main-List'>
        {this.renderBeerOptions()}
      </div>
    )
  }
}

export default BeerType;