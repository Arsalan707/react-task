/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hook = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  // const [menu, setMenu] = useState(null);                       EXAMPLE
  // useEffect(() => {
  //   get('/menu').then((response)=>{setMenu(response.data);});
  // }, []);

  return (
    <div>
      <div>
        <ul>
          {state?.map((userObj, index) => (
            <li key={userObj.id}>
              <h1>{userObj.id}</h1>
              <h2>User_Name: {userObj.username} </h2>
              <h3>Full_Name:</h3> {userObj.name},<h3>User_Email:</h3>{' '}
              {userObj.email}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/tester">go to tester</Link>
    </div>
  );
};

export default Hook;
