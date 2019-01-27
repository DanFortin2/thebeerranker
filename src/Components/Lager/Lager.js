import React from 'react';

import LagerList from '../LagerList/LagerList';

class Lager extends React.Component {
  render() {
    return (
      <div className="Lager">
        {
          this.props.beers.map(beer => {
            //setting props on business component to equal the unique ID for the business key from Yelp API
            return <LagerList beer={beer} />
          })
        }
      </div>
    );
  }
}

export default Lager;
