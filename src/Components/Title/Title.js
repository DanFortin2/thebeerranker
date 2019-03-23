import React from 'react';
import BeerType from '../BeerType/BeerType';


let beerTypes = {
  'Lager': 'Lager',
  'Stout': 'Stout',
  'Pilsner': 'Pilsner',
  'Ale': 'Ale'
};


class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
      showAddBeerScreen: false
    };
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.generateAddBeerScreen = this.generateAddBeerScreen.bind(this);
    this.displayBeerModal = this.displayBeerModal.bind(this);
    this.hideAddBeerScreen = this.hideAddBeerScreen.bind(this);
    this.addBeerTile = this.addBeerTile.bind(this);
  }



  renderSortByOptions() {
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop
    return Object.keys(beerTypes).map(beerType => {
      let beerTypeValue = beerTypes[beerType];
      //returned the above value and appended LI elements on it, added a classname attribute to go wtih the css file, and an onClick listener event that binds  handlechange to it
      return <li className={this.getSortByClass(beerTypeValue)} onClick={this.handleSortByChange.bind(this, beerTypeValue)} key={beerTypeValue}>{beerType}</li>;
    });
  }

  handleSortByChange(beerType) {
    this.setState({
      sortBy: beerType
    });
  }

  generateAddBeerScreen() {
    this.setState({
      showAddBeerScreen: true
    });
  }

  hideAddBeerScreen() {
    this.setState({
      showAddBeerScreen: false
    });
  }

  addBeerTile() {
    this.setState({
      showAddBeerScreen: false
    });
  }

  displayBeerModal() {
    if (this.state.showAddBeerScreen === true) {
      return <div className='Dialogue-Box'>   <div>     <ul className='menu-items'>       <li className='close' onClick={this.hideAddBeerScreen}>Close</li>       <li className='add' onClick={this.addBeerTile}>Add</li>     </ul>   </div>   <div>     <h2>Add Beer Review</h2>     <h3 className='required-fields'>* denotes required fields</h3>   </div>   <div className='beer-input-fields'>     <form>       <label><span className='required'>*</span>Name of Beer:         <input type="text" name="beername" maxlength="30" size="30"/>       </label>       <label><span className='required'>*</span>Brewed In:         <input type="text" name="Brewed"  maxlength="30" size="30"/>       </label>       <fieldset id="beer-dropdown">         <label><span className='required'>*</span>Beer Type:</label>         <select id = "myList">           <option value = "1">Lager</option>           <option value = "2">Stout</option>           <option value = "3">Pilsner</option>           <option value = "4">Ale</option>         </select>       </fieldset>       <label>IBU:         <input type="text" name="IBU"  maxlength="4" size="4"/>       </label>       <label>Alc %:         <input type="text" name="Alc"  maxlength="4" size="4"/>       </label>       <label className="formfielddesc"><span className='required'>*</span>Description:         <textarea type="text" name="Description"  maxlength="150" cols= "60" rows="3"/>       </label>     </form>   </div> </div>; 
    }
  }

  getSortByClass(beerType) {
    if(this.state.sortBy === beerType) {
      return 'active'
    } else {
      return;
    }
  }
          //<AddBeer show={this.state.showAddBeerScreen}/>
  render() {
    return (
      <div className="Title">
        <header className="Title-header">
          <div>
            <h1>The Beer Ranker</h1>
          </div>
          <div>
            <ul className='Beer-Types' onClick={this.handleSortChangeAutoSearch}>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className='Add-Beer'>
            <span className='plus-icon' onClick={this.generateAddBeerScreen}>+</span>
          </div>
        </header>
        <div className = "HomePage">
          <BeerType  sortBy={this.state.sortBy}/>
        </div>
        <div className='Add-Dialogue'>
          {this.displayBeerModal()}
        </div>
      </div>
    );
  }
}

export default Title;
