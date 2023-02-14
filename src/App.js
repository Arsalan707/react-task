import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './navBar';
// import Parent from './Class/ReceiveEventHandler/Parent';
//import Countclass from './Class/Countclass';
//import Parent from './Class/Parent';

import Todo from './Todo';
import Tester from './Tester';
import SelectButton from './SelectButton';
import Hook from './Hook';
import Count from './Count';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          {/* <Link to="/">TODO</Link>
          <Link to="/tester">Tester</Link>
          <Link to="/selectbutton">selectbutton</Link>
          <Link to="/hook">hook</Link>
          <Link to="/count">count</Link> */}
          <Routes>
            {/* <Parent /> */}
            {/* <Countclass /> */}
            {/* <Parent /> */}

            <Route path="/" element={<Todo />} />
            <Route path="/tester" element={<Tester />} />
            <Route path="/selectbutton" element={<SelectButton />} />
            <Route path="/hook" element={<Hook />} />
            <Route path="/count" element={<Count />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
