import React from 'react';
import Title from '../Title/Title'
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          title: 'Molson Canadian',
          type: 'Lager',
          price: '$3.00'
        }
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          < Title beers={this.state.beers} />
        </div>
      </div>
    );
  }
}

export default App;
