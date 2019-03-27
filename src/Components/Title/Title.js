import React from 'react';
import BeerType from '../BeerType/BeerType';
import Beers from '../../Utils/BeerLister';


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
      showAddBeerScreen: false,
      beername: '',
      brewed: '',
      ibu: '',
      alc: '',
      beerlist: 'lager',
      description: '',
      beers: null
    };
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.generateAddBeerScreen = this.generateAddBeerScreen.bind(this);
    this.displayBeerModal = this.displayBeerModal.bind(this);
    this.hideAddBeerScreen = this.hideAddBeerScreen.bind(this);
    this.handleFormFieldValueChanges = this.handleFormFieldValueChanges.bind(this);
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

  getSortByClass(beerType) {
    if(this.state.sortBy === beerType) {
      return 'active'
    } else {
      return;
    }
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

  handleFormFieldValueChanges(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  addBeerTile() {
    const newBeer = {
      name: this.state.beername,
      percent: this.state.alc,
      ibu: this.state.ibu,
      description: this.state.description,
      location: this.state.brewed,
      beerlist: this.state.beerlist
    }
    if (!newBeer.name || !newBeer.location || !newBeer.description) {
      alert("You must fill in all required fields")
    } else {
      this.setState({
        beers: newBeer,
        showAddBeerScreen: false,
        beername: '',
        brewed: '',
        ibu: '',
        alc: '',
        description: ''
      });
    }
    Beers.createLagers(this.state.beers).then(newBeers => {
      this.props.history.push(`/lagers`);
      this.setState({
        newBeers: newBeers,
        beers: JSON.parse(JSON.stringify(newBeers))
      })
    });
  }

/* logging to see beer object*/
  componentDidUpdate() {
    console.log(this.state.beers);
  }




  displayBeerModal() {
    if (this.state.showAddBeerScreen === true) {
      return <div className='Dialogue-Box'>   <div>     <ul className='menu-items'>       <li className='close' onClick={this.hideAddBeerScreen}>Close</li>       <li className='add' onClick={this.addBeerTile}>Add</li>     </ul>   </div>   <div>     <h2>Add Beer Review</h2>     <h3 className='required-fields'>* denotes required fields</h3>   </div>   <div className='beer-input-fields'>     <form>       <label><span className='required'>*</span>Name of Beer:         <input type="text" name="beername" maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <label><span className='required'>*</span>Brewed In:         <input type="text" name="brewed"  maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <fieldset id="beer-dropdown">         <label><span className='required'>*</span>Beer Type:</label>         <select id = "myList" value = {this.state.beerlist} name="beerlist" onChange={this.handleFormFieldValueChanges}>           <option value = "lager">Lager</option>           <option value = "stout">Stout</option>           <option value = "pilsner">Pilsner</option>           <option value = "ale">Ale</option>         </select>       </fieldset>       <label>IBU:         <input type="text" name="ibu"  maxLength="4" size="4" onChange={this.handleFormFieldValueChanges}/>       </label>       <label>Alc %:         <input type="text" name="alc"  maxLength="4" size="4" onChange={this.handleFormFieldValueChanges}/>       </label>       <label className="formfielddesc"><span className='required'>*</span>Description:         <textarea type="text" name="description"  maxLength="150" cols= "60" rows="3" onChange={this.handleFormFieldValueChanges}/>       </label>     </form>   </div> </div>;
    }
  }


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
