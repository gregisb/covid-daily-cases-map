import moment from 'moment';
import React, { useContext, useState } from 'react';
import CovidContext from '../../context/CovidContext';
import './Slider.css';


const handleChange = (e, setCurrentDate, datesList) => {
  
  setCurrentDate(datesList[e.target.value]);
  document.getElementById('bubble').id = ''
};




const Slider = () => {
  const { currentDate, setCurrentDate, datesList } = useContext(CovidContext);

  return (
    <div className="range-container">
      <input
        name="range"
        className="dates-range"
        type="range"
        min="0"
        onChange={(e) => handleChange(e, setCurrentDate, datesList)}
        max={datesList.length - 1}
        step='1'
        list="tickmarks"
      />
      <datalist id="tickmarks">
        {datesList.map((_mark, index) => <option key={index} value={index} />)}
      </datalist>
      <div>
        <span id="bubble" className="position btn btn-outline-dark" style={{cursor: 'default'}}>{currentDate}</span>
      </div>
      
      
    </div>
  )
}

export default Slider;