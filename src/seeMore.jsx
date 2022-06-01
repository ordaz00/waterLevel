import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from "./chart.jsx"

function seeMore(){
  const [buttonPushed, updateButtonPushed] = useState(false);
  
  function buttonAction() {
    if (buttonPushed){
      updateButtonPushed(false);
    }else{
      updateButtonPushed(true);
    }
  }
  
  if (buttonPushed) {
    return (
      <div>
        <div className="buttonHolder">
          <button className="redButton" onClick={buttonAction}>
            See Less
        </button>
      </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
    )
  }
  else return (
    <div className="buttonHolder">
        <button className="redButton" onClick={buttonAction}>
          See More
      </button>
    </div>
  )
}

export default seeMore;