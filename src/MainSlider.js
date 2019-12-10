import React from 'react';
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'

const minimum = 2.6;
const maximum = 8.5;

const PrettoSlider = withStyles({
    root: {
        height: 6,
    },
    thumb: {
        height: 24,
        width: 24,
        border: '2px solid currentColor',
        marginTop: -10,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
      color:'#ffffff',
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 6,
        borderRadius: 4,
    },
})(Slider);

const marks = [
  {
    value: 2.6,
    label: '2.6'
  }, {
    value: 4.5,
    label: '4.5'
  }, {
    value: 6,
    label: '6'
  }, {
    value: 8.5,
    label: '8.5'
  }
];

export const MainSlider = ({ position, setPosition }) => {
    const handler = (event, value) => {
        setPosition(value);
    }

    return (
        <PrettoSlider 
          value={position} 
          onChange={handler} 
          valueLabelDisplay='on'
          track={false}
          max={maximum}
          min={minimum}
          step={0.1}
        />
    )
}
