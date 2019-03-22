import React from 'react';
import Title from '../Title/Title';

class BeerDialogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBeerScreen: this.props.showAddBeerScreen
    };
    this.hideDialogueBox = this.hideDialogueBox.bind(this);
    this.BeerDialogue = this.BeerDialogue.bind(this);
  }

  hideDialogueBox() {
    this.setState({
      showAddBeerScreen: false
    });
  }

  BeerDialogue() {
    if (this.state.showAddBeerScreen === true) {
      return (
        <div className='Dialogue-Box'>
          <div>
            <ul className='menu-items'>
              <li className='close' onClick={this.hideDialogueBox}>Close</li>
              <li className='add'>Add</li>
            </ul>
          </div>
          <div>
            <h2>test</h2>
          </div>
          <div></div>
        </div>
      )
    } else if (this.state.showAddBeerScreen === false) {
      return (
        <div className='Dialogue-Box'>
          <div>
            <ul className='menu-items'>
              <li className='close' onClick={this.hideDialogueBox}>Close</li>
              <li className='add'>Add</li>
            </ul>
          </div>
          <div>
            <h2>test</h2>
          </div>
          <div></div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.beerDialogue()};
      </div>
    )
  }
}

export default BeerDialogue;
