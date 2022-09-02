import React from "react";
import Input from "../../components/UI/Input";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <section className="nav-bar__search">
        <div className="form-outline">
          <input
            type="search"
            id="seatch"
            className="form-control"
            placeholder="Search Here"
            aria-label="Search"
          />
        </div>
      </section>
      <section className="nav-bar__navigation">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </section>
      <section></section>
    </nav>
  );
};

export default Navbar;
