import React from 'react';
import Beers from '../../Utils/BeerLister';
import LagerList from '../LagerList/LagerList';
import AleList from '../AleList/AleList';
import PilsnerList from '../PilsnerList/PilsnerList';
import StoutList from '../StoutList/StoutList';

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
      rating: '',
      alc: '',
      beerlist: '',
      description: '',
      imgUrl: '',
      updateBeerList: false
    };
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.generateAddBeerScreen = this.generateAddBeerScreen.bind(this);
    this.displayBeerModal = this.displayBeerModal.bind(this);
    this.hideAddBeerScreen = this.hideAddBeerScreen.bind(this);
    this.handleFormFieldValueChanges = this.handleFormFieldValueChanges.bind(this);
    this.addBeerTile = this.addBeerTile.bind(this);
    this.renderBeerOptions = this.renderBeerOptions.bind(this);
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
      beerlist: this.state.beerlist,
      name: this.state.beername,
      percent: this.state.alc,
      rating: Math.round(this.state.rating),
      description: this.state.description,
      location: this.state.brewed,
      imgUrl: this.state.imgUrl
    }
    if (!newBeer.name || !newBeer.location || !newBeer.description || !newBeer.percent || !newBeer.imgUrl || !newBeer.beerlist || !newBeer.rating) {
      alert("You must fill in all required fields. Rating cannot be a 0. Ratings will be rounded to a whole number.")
      return;
    } else if (newBeer.rating < 0 || newBeer.rating > 5) {
      alert ("This isn't rocket science. Put a number between 1 and 5 for the rating.")
      return;
    } else if (newBeer.percent < 0 || newBeer.percent > 99 || newBeer.percent.length > 4) {
      alert ("Be reasonable. Put a real Alcohol percentage in!")
      return;   
    } else {
      this.setState({
        showAddBeerScreen: false,
        beername: '',
        brewed: '',
        rating: '',
        alc: '',
        description: ''
      });
    }
    Beers.createBeer(newBeer).then(newBeers => {
      this.setState({
        updateBeerList: true
      });
    });
  }



  displayBeerModal() {
    if (this.state.showAddBeerScreen === true) {
      return <div className='Dialogue-Box'>   <div>     <ul className='menu-items'>       <li className='close' onClick={this.hideAddBeerScreen}>Close</li>       <li className='add' onClick={this.addBeerTile}>Add</li>     </ul>   </div>   <div>     <h2>Add Beer Review</h2>     <h3 className='required-fields'>* denotes required fields</h3>   </div>   <div className='beer-input-fields'>     <form>       <label><span className='required'>*</span>Name of Beer:         <input type="text" name="beername" maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <label><span className='required'>*</span>Brewed In:         <input type="text" name="brewed"  maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <fieldset id="beer-dropdown">         <label><span className='required'>*</span>Beer Type:</label>         <select id = "myList" name="beerlist"  onChange={this.handleFormFieldValueChanges}>           <option value = ""></option>           <option value = "lager">Lager</option>           <option value = "stout">Stout</option>           <option value = "pilsner">Pilsner</option>           <option value = "ale">Ale</option>         </select>       </fieldset>       <fieldset id="beer-dropdown" className="beer-color">         <label><span className='required'>*</span>Beer Color:</label>         <select id = "myList" name="imgUrl" onChange={this.handleFormFieldValueChanges}>           <option value = ""></option>           <option value = "/images/lightgold.png" className = "Light-beer" alt = "Light gold beer in a glass">Light Gold</option>           <option value = "/images/gold.png" className = "gold-beer" alt = "Gold beer in a glass">Gold</option>           <option value = "/images/brown.png" className = "brown-beer" alt = "Brown beer in a glass">Brown</option>           <option value = "/images/black.png" className = "black-beer" alt = "Black beer in a glass">Black</option>           <option value = "/images/red.png" className = "red-beer" alt = "Redish beer in a glass">Red</option>         </select>       </fieldset>       <label><span className='required'>*</span>Rating:         <input type="number" name="rating"  min="1" max="5" size="1" maxLength="1" onChange={this.handleFormFieldValueChanges}/>         /5 ★'s       </label>       <label><span className='required'>*</span>Alc %:         <input type="number" name="alc"  min="1" max="5" size="1" maxLength="4" onChange={this.handleFormFieldValueChanges}/>       </label>       <label className="formfielddesc"><span className='required'>*</span>Description:          <textarea type="text" name="description"  maxLength="150" cols= "62" rows="3" onChange={this.handleFormFieldValueChanges}/>       </label>     </form>   </div> </div>; 
    }
  }

  renderBeerOptions() {
    if(this.state.sortBy === 'Lager') {
      return (
        <LagerList updateBeerList={this.props.updateBeerList}/>
      );
    } else if(this.state.sortBy === 'Ale') {
      return (
        <AleList updateBeerList={this.props.updateBeerList}/>
      );
    } else if(this.state.sortBy === 'Pilsner') {
      return (
        <PilsnerList updateBeerList={this.props.updateBeerList}/>
      );
    } else if(this.state.sortBy === 'Stout') {
      return (
        <StoutList updateBeerList={this.props.updateBeerList}/>
      );
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
            <ul className='Beer-Types'>
              {this.renderSortByOptions()}
            </ul>
          </div>
          <div className='Add-Beer'>
            <span className='plus-icon' onClick={this.generateAddBeerScreen}>+</span>
          </div>
        </header>
        <div className = "HomePage">
          {this.renderBeerOptions()}
        </div>
        <div className='Add-Dialogue'>
          {this.displayBeerModal()}
        </div>
      </div>
    );
  }
}

export default Title;
