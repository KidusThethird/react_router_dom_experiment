import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Nav;
