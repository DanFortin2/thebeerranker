import React from 'react';
//import BeerDialogue from '../BeerDialogue/BeerDialogue';

class AddBeer extends React.Component {


  renderAddBeerScreen () {
    if (this.props.show === true) {
      return <div className='Dialogue-Box'><div><ul className='menu-items'><li className='close' onClick={this.hideDialogueBox}>Close</li><li className='add'>Add</li>  </ul></div><div><h2>test</h2></div><div></div></div>;
    }
  }

  hideDialogueBox() {
    this.props.show = false;
  }

  render() {
    return (
      <div className='Add-Dialogue'>
        {this.renderAddBeerScreen()}
      </div>
    )
  }
}

export default AddBeer;
