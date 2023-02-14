import React from 'react';

function Tester() {
  const user = [
    { name: 'arsalan', age: 12 },
    { name: 'umer', age: 123 },
    { name: 'aqib', age: 121 },
  ];

  return (
    <>
      <h1>tester</h1>
      {user.map((t) => t.age < 18 && <p>{t.name + t.age}</p>)}
    </>
  );
}

export default Tester;
