import React from 'react';
import Link from 'gatsby-link';
import './Header.css';

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <link to="/">
        <img src={require('../images/LOGO-SKUJ-big.png')} width="30" />
      </link>
      <link to="/courses">Courses</link>
      <link to="/dowloads">Dowloads</link>
      <link to="/workshops">Workshops</link>
      <link to="/buy">
        <butto>Buy</butto>
      </link>
    </div>
  </div>
);

export default Header;
