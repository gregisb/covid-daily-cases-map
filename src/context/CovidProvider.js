import React, { useEffect, useState } from "react";
import CovidContext from "./CovidContext";
import { supabase } from "../supabase";

const mapCountryNames = {
  "United States of America": "United States",
};

const customSetCountry = (country, setCountry) => {
  setCountry(mapCountryNames[country] ? mapCountryNames[country] : country);
};

const fetchData = async (currentDate, setData, isCumulative) => {
  if (isCumulative) {
    const { data, error } = await supabase.rpc("get_covid_data_until_date", {
      date_input: currentDate,
    });
    setData(data);
  } else {
    const { data, error } = await supabase
      .from("covid_data")
      .select()
      .eq("date", currentDate);

    setData(data);
  }
};

const fetchAllDates = async (setDatesList) => {
  const { data, error } = await supabase.rpc("get_all_dates");
  const strArr = data.map((currentDate) => currentDate.date);
  setDatesList(strArr);
};

function CovidProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [country, setCountry] = useState();
  const [currentCountryVariants, setCurrentCountryVariants] = useState([]);
  const [currentDate, setCurrentDate] = useState();
  const [datesList, setDatesList] = useState([]);
  const [isCumulative, setIsCumulative] = useState(true);

  const contextValue = {
    isLoading,
    setIsLoading,
    data,
    customSetCountry: (country) => customSetCountry(country, setCountry),
    country,
    currentCountryVariants,
    setCurrentDate,
    currentDate,
    datesList,
    isCumulative,
    setIsCumulative,
  };

  useEffect(() => {
    const filteredData = data.filter(
      (currentItem) => currentItem.location === country
    );
    setCurrentCountryVariants(filteredData);
  }, [country]);

  useEffect(() => {
    fetchAllDates(setDatesList, currentDate, setCurrentDate);
  }, []);

  useEffect(() => {
    if (datesList.length > 0) {
      if (currentDate) {
        fetchData(currentDate, setData, isCumulative);
      } else {
        fetchData(datesList[0], setData, isCumulative);
      }
    }
  }, [datesList, isCumulative, currentDate]);

  return (
    <CovidContext.Provider value={contextValue}>
      {children}
    </CovidContext.Provider>
  );
}

export default CovidProvider;
