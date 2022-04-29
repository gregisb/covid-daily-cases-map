import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h1 className="header-text">Covid Daily Cases</h1>
      <p className="header-description">
      This is a map that shows the covid cases according to the variants in each country.
      </p>
      <p className="header-description2">
      Hover each country to see the data.
      </p>
    </div>
  );
}

export default Header;