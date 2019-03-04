import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import DisplayBooks from './components/DisplayBooks';

const API_KEY= process.env.REACT_APP_GOOGLE_BOOKS_API;

class App extends Component {

constructor(props){
  super(props);

  this.state={
    search: '',
    searchResults: [],
  }
}


searchBooks=async(e)=>{
  e.preventDefault();
  // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

  const data= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=${API_KEY}`);
  console.log(data.data.items);

  this.setState({
    searchResults: data.data.items
  })

}

updateBook=(e)=>{
  const {name, value}= e.target;
  // console.log(name);
  // console.log(value);
  this.setState({
    [name]: value
  })
}




  render() {
    return (
      <div className="App">

      <h1 >BOOK FINDER</h1>
      <Form
      onSubmit={this.searchBooks}
      onChange={this.updateBook}
      value={this.state.search}
      name='search'
      />
      <DisplayBooks
      data={this.state.searchResults}
      />

      </div>
    );
  }
}

export default App;
