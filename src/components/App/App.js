import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import  Yelp from '../../util/Yelp'
import { render } from 'react-dom';

class App extends React.Component {

  constructor(props) {
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then( (businesses) => {
      this.setState({businesses: businesses})
    });
  }

  render () {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>    
    );
  }
}

export default App;
