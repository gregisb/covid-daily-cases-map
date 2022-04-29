import React, { useContext } from 'react'
import CovidContext from '../../context/CovidContext';
import './SelectButton.css'

function SelectButton() {

  const { isCumulative, setIsCumulative } = useContext(CovidContext)

  const handleCumulative = () => {
    if (isCumulative === true) {
      setIsCumulative(false) 
    } else {
      setIsCumulative(true) 
    }
  }

  return (
    <div className="select-button-container">
      <label className="select-button-label" htmlFor="cumulative">Show:</label>
      <select name="cumulative" id="cumulative" onChange= {handleCumulative}>
        <option value='cumulative'>Total cases to date</option>
        <option value='count'>Daily</option>
      </select>
    </div>
  )
}

export default SelectButton;
