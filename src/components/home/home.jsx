import React from 'react'
import './home.css';
import { Component } from 'react';
import { NavLink} from 'react-router-dom';

const API = 'https://api.tvmaze.com/search/shows?q=';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      isLoaded: false,
      value: '',
      img_valid: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  get_data = (name) => {
    fetch(API + name)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        data: json,
      })
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.get_data(this.state.value)
    event.preventDefault();
  }

  render() {
    var {data} = this.state;

    return (
      <div className="home">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Envoyer" />
        </form>
        <ul className="list">
          {data.map(item => {
            const name = item.show.name;
            if (item.show.image) {
              return (
                <li key={item.score}>
                  <h3 className="Name">{name}</h3>
                  <NavLink to={"/info/".concat(item.show.name)}><img className="Myimg" src={item.show.image.medium} alt={item.show.image.medium}/></NavLink>
                </li>
              )
            } else {
              return (
                <li key={item.score}>
                  <h3 className="Name">{name}</h3>
                  <NavLink to={"/info/".concat(item.show.name)}><img className="Myimg" src="./NONE.png" alt="NONE"/></NavLink>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}