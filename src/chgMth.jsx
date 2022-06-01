import React from 'react';
import './App.css';
import Pkr from "./pkr.jsx";

function chgMth(){
  return(
    <div>
      <p>
Here's a quick look at some of the data on reservoirs from the <a href="https://cdec.water.ca.gov/index.html">California Data Exchange Center</a>, which consolidates climate and water data from multiple federal and state government agencies, and  electric utilities.  Select a month and year to see storage levels in the eleven largest in-state reservoirs.
      </p>
      <Pkr />
    </div>
  );
}

export default chgMth;