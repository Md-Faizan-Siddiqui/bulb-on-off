import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function OnOff() {
  const [value, SetValue] = useState(true)
  var brightness = (value === true)? "On" : "Off"

  function change() {
    SetValue(previousValue=>{
      return !previousValue
    })
  }
  return(
    <div className= {`main ${brightness}`}>
      <div>
        Bulb is {brightness}
      </div>
      <button onClick= {change}>On/Off</button>
    </div>
  )
}
ReactDOM.render(<OnOff/>,document.getElementById('root')
);


