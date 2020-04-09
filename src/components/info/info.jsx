import React from 'react'
import './info.css';
import { Component } from 'react';
import { Box, Button,Container } from '@material-ui/core';
import language_exist from './language'

const API = 'https://api.tvmaze.com/search/shows?q=';
const API_FLAGS = 'https://www.countryflags.io/'
const API_CAST = 'http://api.tvmaze.com/shows/'

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
      data_premiere : "NONE",
      flags : "NONE",
      id : 0,
      data_char : [],
    }
  }

  get_data_char = () => {
    fetch("http://api.tvmaze.com/shows/" + this.state.id + "/cast")
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        data_char: json,
      })
    console.log(this.state.data_char)
    });
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
      genre: json[0].show.genres,
      resume: json[0].show.summary,
      status: json[0].show.status,
      data_premiere: json[0].show.premiered,
      id : json[0].show.id,
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
    this.set_flagscountry()
    this.get_data_char()
    });
  }

  set_flagscountry = () => {
    var { language } = this.state;
    language_exist.map((item, index) => {
      if (item == language) {
        this.setState({
          flags: API_FLAGS + language_exist[index + 1] + "/flat/64.png"
        })
      }
    })
  }

  componentDidMount = () => {
    this.get_data(this.find_name())
  }
  
  render() {
    var {isLoaded, data, status, data_premiere, flags, id, data_char} = this.state;
    if (!isLoaded) {
      return <div><h1>Loading</h1></div>;
    } else {
      return (
        <div>
          <img className="img_film" src={this.state.image}></img>
          <div className="info">
            <h1 className="Title_film">{this.state.title}</h1>
            <h1 className="Score">Score : {this.state.score}</h1>
            <div className="left_box">
              <h1>{this.state.language}: <img src={flags} /></h1>
              <h1>Genres : </h1>
              {data[0].show.genres.map(item => <li key={item}>{item}</li>)}
              <h1>Status : {status}</h1>
              <h1>Premiere : {data_premiere}</h1>
            </div>
            <p className="my_resume">{this.state.resume}</p>
            <h2 className="Casting_title"> Casting : </h2>
          </div>
            <ul className="Cast">
              {data_char.map(item => <li> <h2> {item.person.name} </h2> <img src={item.person.image.medium}/> </li>)}
            </ul>
        </div>
      )
    }
  }
}