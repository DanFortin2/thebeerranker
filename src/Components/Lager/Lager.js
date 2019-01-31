import React from 'react';
import LagerList from '../LagerList/LagerList';
import AleList from '../AleList/AleList';

class Lager extends React.Component {
  renderBeerOptions() {
    if(this.props.sortBy === 'Lager') {
      return <LagerList />;
    } else if(this.props.sortBy === 'Ale') {
      return <AleList />;
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

export default Lager;
