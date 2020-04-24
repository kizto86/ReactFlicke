import React, { Component } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
const axios = require("axios").default;
import apiKey from "./config";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      flickr: [],
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "sunset") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          flickr: response.data.photos.photo,
        });
      })
      .catch((error) => {
        console.log("Error while parsing and fetching data", error);
      });
  };

  render() {
    console.log(this.state.flickr);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          <GifList data={this.state.flickr} />
        </div>
      </div>
    );
  }
}
