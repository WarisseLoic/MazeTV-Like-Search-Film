import React from 'react';
import './footer.css';
import { AppBar, BottomNavigation, Grid, Paper} from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';

function footer() {
  return (
    <div className="footer">
        <Grid container space={12} className="Footer_bas" style={{ background: '#2E3B55' }}>
            <Grid item xs={3}>
                <Paper style={{ background: '#2E3B55' }}><a><p>@CopyRight - FindYourFilm</p></a></Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper style={{ background: '#2E3B55' }}><a><p>Contactez-nous</p></a></Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper style={{ background: '#2E3B55' }}><a><p>Partenaires</p></a></Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper style={{ background: '#2E3B55' }}><a><p>Gna Nananère</p></a></Paper>
            </Grid>
        </Grid>
    </div>
  );
}

export default footer;