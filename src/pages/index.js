import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1> Skujero la prima app per le sagre</h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget porta
          sapien. Nam iaculis mollis mauris non dictum. Donec risus enim,
          hendrerit sed elit nec, accumsan euismod massa. {' '}
        </p>
        <p> Now go build something great. </p>
        <Link to="/page-2/"> Iscriviti ora </Link>
      </div>
    </div>
  </div>
);

export default IndexPage;
