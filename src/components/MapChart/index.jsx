import React, { memo, useContext } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import CovidContext from "../../context/CovidContext";

import './MapChart.css'
import logo from '../../assets/loading.gif' 
import VariantTable from "../variantTable";
import { scaleLinear, scaleLog, scaleQuantize } from "d3-scale";





const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';



const MapChart = ({ setTooltipContent }) => {

  const { data, isLoading, customSetCountry } = useContext(CovidContext);
  
  const casesByCountry = {};
  let maxCases = 0;
  


  for (let i = 0; data.length > i; i++) {
    let country = data[i].location
    if (country === "United States") {
      country += " of America" 
    }
    if (casesByCountry[country]) {
      casesByCountry[country] += data[i].num_sequences
    } else {
      casesByCountry[country] = data[i].num_sequences
    }
  };

  const countriesList = Object.keys(casesByCountry)

  for (let i = 0; countriesList.length > i; i++) {
    let currentCountry = countriesList[i]
    if (casesByCountry[currentCountry] > maxCases) {
      maxCases = casesByCountry[currentCountry]
    }
  };


  const colorScale = scaleLog()
  .domain([1, Math.log10(maxCases)])
  .range(["#ff9595", "#ff8a88", "#ff7e7b", "#ff726d", "#ff655f",
          "#ff5850", "#ff4a40", "#ff3a2f", "#ff261d", "#ff0000"])

  
  return (
    <div className='map-chart'>
      {isLoading && <img className="loading" src={logo} alt="loading..." />}
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <ZoomableGroup zoom={1} minZoom={1} maxZoom={2} translateExtent={[[850, 650], [0, 0]]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                let cases = casesByCountry[geo.properties.NAME]
                let color;
                if (cases === undefined) {
                  color = '#CCC'
                } else {
                  color = colorScale(cases)
                }
                return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={color}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    customSetCountry(NAME)
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      // fill: "#746AB0",
                      outline: "none",
                      stroke: '#fff',
                      strokeWidth: '0.3'
                    },
                    hover: {
                      fill: "#333333",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              )})
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
