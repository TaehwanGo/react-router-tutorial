import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'green',
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navBtn" exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} exact to="/about/foo">
            About Foo
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} exact to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;
