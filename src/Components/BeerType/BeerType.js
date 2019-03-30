import React from 'react';
import LagerList from '../LagerList/LagerList';
import AleList from '../AleList/AleList';
import PilsnerList from '../PilsnerList/PilsnerList';
import StoutList from '../StoutList/StoutList';
import { Link } from 'react-router-dom';

class BeerType extends React.Component {
  renderBeerOptions() {
    if(this.props.sortBy === 'Lager') {
      return (
        <Link to={`/lagers`}>
          <LagerList />
        </Link>
      );
    } else if(this.props.sortBy === 'Ale') {
      return (
        <Link to={`/ales`}>
          <AleList />
        </Link>
      );
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
