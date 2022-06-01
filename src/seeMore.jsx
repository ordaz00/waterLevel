import React from 'react';
import './App.css';

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
      <div className="chart">
        <chart />
      </div>
    )
  }
  else return (
    <div className="buttonHolder">
        <button id="redButton" onClick={buttonAction}>
          See More
      </button>
    </div>
  )
}

export default seeMore;