import React, { Component } from 'react';
import './header.css';
import { AppBar, IconButton, Tab, Toolbar, Typography} from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';

export default class header extends Component {
  render () {
    return (
      <div className="div_header">
        <AppBar title="My App" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <IconButton color="inherit"></IconButton>
              <Tab component={Link} to="/" label="Acceuil"/>
            <div className="NAV_LEFT">
              <Tab component={Link} to="/find" label="Trouver mon Film" />
              <Tab component={Link} to="/list" label="Ma listes de film" />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}