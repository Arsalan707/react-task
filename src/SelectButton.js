/* eslint-disable array-callback-return */
import React, { useState } from 'react';
function SelectButton() {
  const colorNames = [
    'Aquamarine',
    'BlueViolet',
    'Chartreuse',
    'CornflowerBlue',
    'seaGreen',
  ];
  const [color, setColor] = useState('Tomato');
  const divColor = { backgroundColor: color };

  return (
    //set state setter inside
    <div style={divColor}>
      <h3>THE SELECTED COLOR IS :{color} </h3>
      {colorNames.map((value, index) => (
        <button onClick={() => setColor(value)}>{value}</button>
      ))}
    </div>
  );
}

export default SelectButton;
