import React, { Component, useState, useEffect } from 'react';
 
import MonthYearPicker from 'react-month-year-picker';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 10,
      year: 2018,
    };
  }
  
  render() {
    function workAround(){
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
          <button id="mYP" onClick={buttonAction}>
            {this.state.month} {this.state.year}
          </button>
          <MonthYearPicker
            selectedMonth={this.state.month}
            selectedYear={this.state.year}
            minYear={2000}
            maxYear={2030}
            onChangeYear={year => this.setState({ year: year })}
            onChangeMonth={month => this.setState({ month: month})}/>
          </div>
        );
      }else{
        return(
          <div>
            <button id="mYP" onClick={buttonAction}>
              {this.state.month} {this.state.year}
            </button> 
          </div>
        )
      }
    }
    workAround();
  }
}