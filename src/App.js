import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MapChart from './components/MapChart/MapChart';
import ReactTooltip from "react-tooltip";
import Slider from './components/Slider/Slider';
import SelectButton from './components/SelectButton/SelectButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import VariantTable from './components/variantTable/VariantTable';
import { supabase } from './supabase';

import CovidContext from "./context/CovidContext";


function App() {
  const [content, setContent] = useState("");
  
  const { data, country, currentCountryVariants } = useContext(CovidContext);

  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <SelectButton />
        <Slider />
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip className='custom-tooltip'><VariantTable country={country} variantList={currentCountryVariants}/></ReactTooltip>
      </div>
      <Footer />
    </div>
  );
}

export default App;
