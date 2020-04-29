import React, { Component } from 'react';
import './App.css';
import BagelContainer from './components/BagelContainer'
import FavoritesContainer from './components/FavoritesContainer';


class App extends Component {

  state = {
    bagels: [],
    favorites: []
  }
  componentDidMount(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(bagels => this.setState({bagels}))
  }

  addToFavorites = (bagel) => {
    if(!this.state.favorites.find(bag => bag.id === bagel.id)){
    this.setState({favorites: [...this.state.favorites,bagel]})
    }
  }

  removeFromFavorites = (bagel) => {
    let newFavs = this.state.favorites.filter(bag => bag.id !== bagel.id)
    this.setState({favorites: newFavs})
  }


  render(){
  return (
    <div className="App">
      <FavoritesContainer favorites={this.state.favorites} action={this.removeFromFavorites} />
      <h1>Bagels Container</h1>
      <BagelContainer bagels={this.state.bagels} action={this.addToFavorites}/>
    </div>
  );
  }
}

export default App;