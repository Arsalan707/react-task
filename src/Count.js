import React, { useState } from 'react';

function Count() {
  const [seletName, setSeletName] = useState(0);
  const add = () => {
    setSeletName((seletName) => seletName + 1);
  };
  const subtract = () => {
    setSeletName(seletName - 1);
  };
  return (
    <div>
      <div>
        <h1>click counting: {seletName}</h1>
        <button onClick={add}>Count: +1</button>
        <button onClick={subtract} disabled={seletName <= 0}>
          Count: -1
        </button>
      </div>
    </div>
  );
}

export default Count;
