import React from 'react';
import Beers from '../../Utils/BeerLister';

class LagerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generateBeerScreen: false,
      beers: [],
      currentBeerId: '',
      beername: '',
      brewed: '',
      ibu: '',
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
    Beers.getLagers().then(beerItem => {
      this.setState({
        beers: beerItem
      })
    });
  }


  deleteItem(id) {
    Beers.deleteLagers(id).then(() => {
      Beers.getLagers().then(beerItem => {
        this.setState({
          beers: beerItem
        })
      });
    });
  }



  componentWillReceiveProps(props) {
    const refresh = this.props;
    if (props.refresh !== refresh) {
      Beers.getLagers().then(beerItem => {
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
      return <div className='Dialogue-Box'>   <div>     <ul className='menu-items'>       <li className='close' onClick={this.closeEditBeerScreen}>Close</li>       <li className='add' onClick={this.updateBeerTile}>Add</li>     </ul>   </div>   <div>     <h2>Add Beer Review</h2>     <h3 className='required-fields'>* denotes required fields</h3>   </div>   <div className='beer-input-fields'>     <form>       <label><span className='required'>*</span>Name of Beer:         <input type="text" name="beername" maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <label><span className='required'>*</span>Brewed In:         <input type="text" name="brewed"  maxLength="30" size="30" onChange={this.handleFormFieldValueChanges}/>       </label>       <fieldset id="beer-dropdown">         <label><span className='required'>*</span>Beer Type:</label>         <select id = "myList" name="beerlist"  onChange={this.handleFormFieldValueChanges}>           <option value = ""></option>           <option value = "lager">Lager</option>           <option value = "stout">Stout</option>           <option value = "pilsner">Pilsner</option>           <option value = "ale">Ale</option>         </select>       </fieldset>       <fieldset id="beer-dropdown" className="beer-color">         <label><span className='required'>*</span>Beer Color:</label>         <select id = "myList" name="imgUrl" onChange={this.handleFormFieldValueChanges}>           <option value = ""></option>           <option value = "/images/red.jpg" className = "red-beer">Red</option>           <option value = "/images/gold.jpg" className = "gold-beer">Gold</option>           <option value = "/images/brown.jpg" className = "brown-beer">Brown</option>           <option value = "/images/black.jpg" className = "black-beer">Black</option>         </select>       </fieldset>       <label>IBU:         <input type="text" name="ibu"  maxLength="4" size="4" onChange={this.handleFormFieldValueChanges}/>       </label>       <label><span className='required'>*</span>Alc %:         <input type="text" name="alc"  maxLength="4" size="4" onChange={this.handleFormFieldValueChanges}/>       </label>       <label className="formfielddesc"><span className='required'>*</span>Description:         <textarea type="text" name="description"  maxLength="150" cols= "60" rows="3" onChange={this.handleFormFieldValueChanges}/>       </label>     </form>   </div> </div>;
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
      ibu: this.state.ibu,
      description: this.state.description,
      location: this.state.brewed,
      imgUrl: this.state.imgUrl
    }
    if (!newBeer.name || !newBeer.location || !newBeer.description || !newBeer.percent || !newBeer.imgUrl || !newBeer.beerlist) {
      alert("You must fill in all required fields")
      return;
    } else {
      this.setState({
        generateBeerScreen: false,
        currentBeerId: '',
        beername: '',
        brewed: '',
        ibu: '',
        alc: '',
        description: ''
      });
    }
    Beers.updateLagers(newBeer).then(() => {
      Beers.getLagers().then(beerItem => {
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
        <div className="Beer-information"><p>IBU: {beerTypeValue.ibu}</p><p>Alc. {beerTypeValue.percent}%</p></div><div className="location"><p>Brewed in: {beerTypeValue.location}</p></div><div className="beerdesc"><p>{beerTypeValue.description}</p></div></div>;
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


export default LagerList;
