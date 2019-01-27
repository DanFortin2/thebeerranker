import React from 'react';



class LagerList extends React.Component {
  render() {
    return (
      <div className="LagerList">
        <h2>{this.props.beer.title}</h2>
        <div className="Beer-information">
          <p>{this.props.beer.type}</p>
          <p>{this.props.beer.price}</p>
        </div>
      </div>
    );
  }
}

export default LagerList;
