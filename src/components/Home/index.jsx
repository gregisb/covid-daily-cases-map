import React, {useContext, useState} from 'react';
import './Home.css';
import Footer from '../Footer';
import Header from '../Header';
import MapChart from '../MapChart';
import ReactTooltip from "react-tooltip";
import Slider from '../Slider';
import SelectButton from '../SelectButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import VariantTable from './../variantTable/';

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
        <MapChart setTooltipContent={setContent} variantList={currentCountryVariants}/>
        <ReactTooltip className='custom-tooltip'><VariantTable country={country} variantList={currentCountryVariants}/></ReactTooltip>
      </div>
      <Footer />
    </div>
  )
}

export default Home;