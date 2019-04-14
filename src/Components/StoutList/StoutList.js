import React from 'react';
import Beers from '../../Utils/BeerLister'

class StoutList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generateBeerScreen: false,
      beers: [],
      currentBeerId: '',
      beername: '',
      brewed: '',
      rating: '',
      alc: '',
      beerlist: '',
      description: '',
      imgUrl: ''
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.generateEditBeerScreen = this.generateEditBeerScreen.bind(this);
    this.editBeerScreen = this.editBeerScreen.bind(this);
    this.closeEditBeerScreen = this.closeEditBeerScreen.bind(this);
    this.updateBeerTile = this.updateBeerTile.bind(this);
    this.handleFormFieldValueChanges = this.handleFormFieldValueChanges.bind(this);
  }

  componentDidMount() {
    Beers.getStout().then(beerItem => {
      this.setState({
        beers: beerItem
      })
    });
  }

  deleteItem(id) {
    Beers.deleteStout(id).then(() => {
      Beers.getStout().then(beerItem => {
        this.setState({
          beers: beerItem
        })
      });
    });
  }

  componentWillReceiveProps(props) {
    const refresh = this.props;
    if (props.refresh !== refresh) {
      Beers.getStout().then(beerItem => {
        this.setState({
          beers: beerItem
        })
      });
    }
  }

  
  generateEditBeerScreen(id) {
    this.setState({
      generateBeerScreen: true,
      currentBeerId: id
    });
  }

  closeEditBeerScreen() {
    this.setState({
      generateBeerScreen: false  
    });
  }

  

  editBeerScreen() {
    if(this.state.generateBeerScreen === true) {
      return <div className='Dialogue-Box'>   <div>     <ul className='menu-items'>       <li className='close' onClick={this.closeEditBeerScreen}>Close</li>       <li className='add' onClick={this.updateBeerTile}>Add</li>     </ul>   </div>   <div>     <h2>Edit Beer Review</h2>     <h3 className='required-fields'>* denotes required fields</h3>   </div>   <div className='beer-input-fields'>     <form>       <label><span className='required'>*</span>Name of Beer:         <input type="text" name="beername" maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <label><span className='required'>*</span>Brewed In:         <input type="text" name="brewed"  maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <fieldset id="beer-dropdown">         <label><span className='required'>*</span>Beer Type:</label>         <select id = "myList" name="beerlist"  onChange={this.handleFormFieldValueChanges}>           <option value = ""></option>           <option value = "lager">Lager</option>           <option value = "stout">Stout</option>           <option value = "pilsner">Pilsner</option>           <option value = "ale">Ale</option>         </select>       </fieldset>       <fieldset id="beer-dropdown" className="beer-color">         <label><span className='required'>*</span>Beer Color:</label>         <select id = "myList" name="imgUrl" onChange={this.handleFormFieldValueChanges}>           <option value = ""></option>           <option value = "/images/lightgold.png" className = "Light-beer" alt = "Light gold beer in a glass">Light Gold</option>           <option value = "/images/gold.png" className = "gold-beer" alt = "Gold beer in a glass">Gold</option>           <option value = "/images/brown.png" className = "brown-beer" alt = "Brown beer in a glass">Brown</option>           <option value = "/images/black.png" className = "black-beer" alt = "Black beer in a glass">Black</option>           <option value = "/images/red.png" className = "red-beer" alt = "Redish beer in a glass">Red</option>         </select>       </fieldset>       <label><span className='required'>*</span>Rating:         <input type="number" name="rating"  min="1" max="5" size="1" onChange={this.handleFormFieldValueChanges}/>         /5 ★'s       </label>       <label><span className='required'>*</span>Alc %:         <input type="number" name="alc"  min="1" max="5" size="1" onChange={this.handleFormFieldValueChanges}/>       </label>       <label className="formfielddesc"><span className='required'>*</span>Description:          <textarea type="text" name="description"  maxLength="150" cols= "62" rows="3" onChange={this.handleFormFieldValueChanges}/>       </label>     </form>   </div> </div>;
    }
  }

  handleFormFieldValueChanges(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

 
  updateBeerTile() {
    const newBeer = {
      id: this.state.currentBeerId,
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
        generateBeerScreen: false,
        currentBeerId: '',
        beername: '',
        brewed: '',
        rating: '',
        alc: '',
        description: ''
      });
    }
    Beers.updateStouts(newBeer).then(() => {
      Beers.getStout().then(beerItem => {
        this.setState({
          beers: beerItem
        })
      });
    });
  }



  renderBeerList() {
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop
    return Object.keys(this.state.beers).map(beerType => {
      let beerTypeValue = this.state.beers[beerType];
      //returned the above value and appended LI elements on it, added a classname attribute to go wtih the css file, and an onClick listener event that binds  handlechange to it
      return <div className="Lager-Tile" key={beerTypeValue.id}><div className="delete-me"><span onClick={this.generateEditBeerScreen.bind(this, beerTypeValue.id)}>Edit</span><span onClick={this.deleteItem.bind(this, beerTypeValue.id)}>X</span></div><h2>{beerTypeValue.name}</h2><img className="beerimg" src={beerTypeValue.imgUrl}/>
        <div className="Beer-information"><p>{beerTypeValue.rating}/5 ★'s</p><p>Alc. {beerTypeValue.percent}%</p></div><div className="location"><p>Brewed in: {beerTypeValue.location}</p></div><div className="beerdesc"><p>{beerTypeValue.description}</p></div></div>;
    });
  }


  render() {
    return (
      <div>
        <div className='Beer-List'>
          {this.renderBeerList()}
        </div>
        <div className='Add-Dialogue'>
          {this.editBeerScreen()}
        </div>
      </div>
    );
  }
}


export default StoutList;
