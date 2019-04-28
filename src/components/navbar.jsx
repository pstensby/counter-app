import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar {totalCounters}
      </a>
    </nav>
  );
};

export default Navbar;
