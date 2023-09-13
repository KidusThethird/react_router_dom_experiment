import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>This is from server</h1>
          <Link to="/server">Home</Link>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Test;
