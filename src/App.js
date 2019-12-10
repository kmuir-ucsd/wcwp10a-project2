import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import { Graph } from './graph/Graph';
import { c02Emissions, temp, c02Concentration, SLR } from './Data'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Background from './background.jpg'
import { MainSlider } from './MainSlider'
import 'typeface-roboto'
import { Rcp, Temp, Concentration, Emissions, SeaLevel, GND, References } from './Text'

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundImage: `url(${Image})`
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
    background: 'transparent',
    boxShadow: 'none',

  },
  pair: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    allignItems: 'center',
    allignContent: 'space-between'
  },
  item: {
    flexGrow: 2,
    maxWidth: 750
  },
  text: {
    flexGrow: 1,
    maxWidth: 600 
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  title: {
    color: '#313436',
  },
  bottom: {
    minHeight: 150
  },
}));


export const App = () => {

  const classes = useStyles();

  const [index, setIndex] = useState(5);

  const [peak, setPeak] = useState(2020);
  const [endTemp, setEndTemp] = useState(0);
  const [endSL, setEndSL] = useState(0);
  const [endConcentration, setEndConcentration] = useState(0);

  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: 100
    }}>
      <Container maxWidth="lg" >
        <Box padding={5} >
          <Typography variant='h1' className={classes.title}>
            The world in 2100: 
          </Typography>
          <br />
          <Typography variant='h2' className={classes.title}>
            Scenarios for climate change and the green new deal
          </Typography>
        </Box>
        <Box paddingY={5} >
          <Card>
            <CardContent>
              <Typography variant='h4'>Representative Concentration Pathways</Typography>
              <br />
              <Rcp />
            </CardContent>
          </Card>
        </Box>
        <Grid container spacing={5} className={classes.pair} >
          <Grid item className={classes.item} >
            <Graph source={c02Emissions} index={index} peakCallback={setPeak}/>
          </Grid>
          <Grid item className={classes.text} >
            <Card>
              <CardContent>
              <Typography variant='h4'>Green House Gas Emissions</Typography>
              <br />
              <Emissions peak={peak}/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item className={classes.item} >
            <Graph source={c02Concentration} index={index} endCallback={setEndConcentration} />
          </Grid>
          <Grid item className={classes.text} >
            <Card>
              <CardContent>
              <Typography variant='h4'>Green House Gas Concentration</Typography>
              <br />
              <Concentration end={endConcentration.toFixed()}/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item className={classes.item} >
            <Graph source={temp} index={index} endCallback={setEndTemp} />
          </Grid>
          <Grid item className={classes.text} >
            <Card>
              <CardContent>
              <Typography variant='h4'>Temprature Change</Typography>
              <br />
              <Temp end={endTemp.toFixed(2)}/>
              </CardContent>
            </Card>
          </Grid>

          <Grid item className={classes.item} >
            <Graph source={SLR} index={index} endCallback={setEndSL}/>
          </Grid>
          <Grid item className={classes.text} >
            <Card>
              <CardContent>
              <Typography variant='h4'>Sea Level Rise</Typography>
              <br />
              <SeaLevel end={endSL.toFixed(2)}/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box paddingY={5} >
          <Card>
            <CardContent>
              <Typography variant='h4'>The Green New Deal</Typography>
              <br />
              <GND/>
            </CardContent>
          </Card>
        </Box>
        <Box >
          <Card>
            <CardContent>
              <Typography variant='h6'>Refrences</Typography>
              <br />
              <References/>
            </CardContent>
          </Card>
        </Box>
        <div className={classes.bottom} ></div>
      </Container>
      <AppBar position="fixed" className={classes.appBar} >
        <Box padding={1} paddingX={5} >
          <MainSlider position={index} setPosition={setIndex} />
        </Box>
      </AppBar>
    </div>
  );
}

