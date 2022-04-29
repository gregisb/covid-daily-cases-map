import React, {useContext, useState} from 'react';
import './Home.css';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import MapChart from './../MapChart/MapChart';
import ReactTooltip from "react-tooltip";
import Slider from './../Slider/Slider';
import SelectButton from './../SelectButton/SelectButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import VariantTable from './../variantTable/VariantTable';

import CovidContext from "./../../context/CovidContext";

const Home = () => {
  const [content, setContent] = useState("");
  
  const { data, country, currentCountryVariants } = useContext(CovidContext);
  return (
    <div className="App">
        <Header />
      <div className='main-container'>
        <SelectButton />
        <Slider />
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip className='custom-tooltip'><VariantTable country={country} variantList={currentCountryVariants}/></ReactTooltip>
      </div>
      <Footer />
    </div>
  )
}

export default Home;