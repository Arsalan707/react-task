import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const style = { padding: '10px' };
  return (
    <div style={style}>
      <Link style={style} to="/">
        TODO
      </Link>
      <Link style={style} to="/tester">
        Tester
      </Link>
      <Link style={style} to="/selectbutton">
        selectbutton
      </Link>
      <Link style={style} to="/hook">
        hook
      </Link>
      <Link style={style} to="/count">
        count
      </Link>
    </div>
  );
}

export default NavBar;
