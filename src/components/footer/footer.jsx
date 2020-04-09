import React from 'react';
import './footer.css';
import {Grid, Paper} from '@material-ui/core';

function footer() {
  return (
    <div className="footer">
        <Grid container space={12} className="Footer_bas" style={{ background: '#2E3B55' }}>
            <Grid item xs={3}>
                <Paper style={{ background: '#2E3B55' }}><p>@CopyRight - FindYourFilm</p></Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper style={{ background: '#2E3B55' }}><p>Contactez-nous</p></Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper style={{ background: '#2E3B55' }}><p>Partenaires</p></Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper style={{ background: '#2E3B55' }}><p>Gna Nananère</p></Paper>
            </Grid>
        </Grid>
    </div>
  );
}

export default footer;