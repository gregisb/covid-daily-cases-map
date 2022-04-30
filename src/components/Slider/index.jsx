import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CovidContext from "../../context/CovidContext";
import "./Slider.css";

const Slider = () => {
  const { currentDate, setCurrentDate, datesList } = useContext(CovidContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [counter, setCounter] = useState(0);

  if (!currentDate) {
    const queryDate = searchParams.get("date");
    if (datesList.indexOf(queryDate) > 0) {
      setCurrentDate(queryDate);
    } else {
      setCurrentDate(datesList[0]);
    }
  }

  const handleChange = (e, setCurrentDate, datesList) => {
    setCurrentDate(datesList[e.target.value]);
    updateUrl();
  };

  const updateUrl = () => {
    setSearchParams({ date: currentDate });
  };

  const handlePlay = (date) => {
    setCurrentDate(date);
    setTimeout(() => {
      const curId = datesList.indexOf(date);
      if (curId < datesList.length - 1) {
        handlePlay(datesList[curId + 1]);
      }
    }, 1500);
  };

  return (
    <div className="range-container">
      <button className="button" onClick={() => handlePlay(datesList[0])}><i class="bi bi-play"></i>Play</button>
      <input
        name="range"
        className="dates-range"
        type="range"
        min="0"
        onChange={(e) => handleChange(e, setCurrentDate, datesList)}
        max={datesList.length - 1}
        step="1"
        list="tickmarks"
        value={datesList.indexOf(currentDate)}
      />
      <datalist id="tickmarks">
        {datesList.map((mark, index) => (
          <option key={index} value={index} />
        ))}
      </datalist>
      <div>
        <span
          id="bubble"
          className="position btn btn-outline-dark"
          style={{ cursor: "default" }}
        >
          {currentDate}
        </span>
      </div>
    </div>
  );
};

export default Slider;
