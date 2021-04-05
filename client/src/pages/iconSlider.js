import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider);


const wrapperStyle = { paddingLeft:'30%',paddingRight:'30%',paddingTop:10,paddingBottom:10,textAlign:'center' };

const CustomSlider = (props)=> (
  <div>
    <div style={wrapperStyle}>
      <span className="label-text">Adjust Size</span>
      <Range min={5} max={100} defaultValue={32} tipFormatter={value => `${value}`} onAfterChange={props.handleSlider}/>
    </div>
  </div>
);

export default CustomSlider;