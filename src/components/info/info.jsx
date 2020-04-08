import React from 'react'
import './info.css';
import { Component } from 'react';

const API = 'https://api.tvmaze.com/search/shows?q=';

export default class Info extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      isLoaded: false,
      image : "NONE",
      score : 0,
      language: "NONE",
      genre: [],
      status : "NONE",
      title : "NONE",
      resume : "NONE",
    }
  }

  find_name = () => {
    let to_parse = window.location.pathname;
    const name = to_parse.split('/')

    return (name[2]);
  }
  
  parse_data = (json) => {
    this.setState({
      image: json[0].show.image ? json[0].show.image.medium : "/NONE.png",
      score: json[0].score,
      title: json[0].show.name,
      language: json[0].show.language,
      genre: json[0].show.genre,
      resume: json[0].show.summary,
    })
  }

  get_data = (name) => {
    fetch(API + name)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        data: json,
      })
    this.parse_data(json)
    });
  }

  componentDidMount = () => {
    this.get_data(this.find_name())
  }
  
  render() {
    var {isLoaded, data, image} = this.state;
    if (!isLoaded) {
      return <div><h1>Loading</h1></div>;
    } else {
      return (
        <div>
          <img className="img_film" src={this.state.image}></img>
          <div className="info">
              <h1 className="Title_film">{this.state.title}</h1>
              <h1>{this.state.language}</h1>
              <h1>{this.state.resume}</h1>
              <h1>{this.state.score}</h1>
              {/* Liste Genre */}
          </div>
        </div>
      )
    }
  }
}