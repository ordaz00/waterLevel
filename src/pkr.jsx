import React, { useState } from 'react';
import './App.css'
import MonthPicker from './monthPicker';
 
function pkr () {
  
  const [date, setDate] = useState({month: 6, year: 2022 });

  function yearChange(newYear) {
      let m = date.month;
      setDate({year: newYear, month: m });
    }

  function monthChange(newMonth){
      let y = date.year;
      setDate({month: newMonth, year: y});
    }
  
    return (
      <div>
        <MonthPicker
          date = {date}
          yearFun = {yearChange}
          monthFun = {monthChange}
          />
      </div>
    );
}
export default pkr;