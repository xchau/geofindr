import React from 'react';
import './Nav.css';

function Nav(props) {
  return (
    <div
      className="w-100 App-NavContainer"
    >
      {props.children}
    </div>
  );
}

export default Nav;
