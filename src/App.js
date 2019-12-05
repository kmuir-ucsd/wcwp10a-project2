import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import { Graph, interpolateValue } from './graph/Graph';
import Slider from '@material-ui/core/Slider'
import { c02Emissions, temp, c02Concentration, SLR } from './Data'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function App() {

  const classes = useStyles();

  const [index, setIndex] = useState(1);

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  return (
    <>
      <Grid container spacing={3} className={classes.grow} >
        <Grid item m>
          <Graph source={c02Concentration} index={interpolateValue(2.6, 8.5, index / 100)} />
        </Grid>
        <Grid item m >
          <Graph source={temp} index={interpolateValue(2.6, 8.5, index / 100)} />
        </Grid>
        <Grid item m>
          <Graph source={c02Emissions} index={interpolateValue(2.6, 8.5, index / 100)} />
        </Grid>
        <Grid item m>
          <Graph source={SLR} index={interpolateValue(2.6, 8.5, index / 100)} />
        </Grid>
      </Grid>
      <AppBar position="fixed" className={classes.appBar}>
        <Slider value={index} onChange={handleChange} />
      </AppBar>
    </>
  );
}

export default App;
