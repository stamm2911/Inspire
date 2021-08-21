import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const styles = {
  fontSize: 22,
};

function Navbar() {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  return (
    <>
      <nav
        style={{ transition: "all 2s", opacity: opacity }}
        className="nav-bg"
      >
        <div className="nav-wrapper">
          <Link
            style={{ fontSize: 35, fontStyle: "italic" }}
            to="/main"
            className="brand-logo"
          >
            Inspire
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link style={{ ...styles }} to="/main">
                Main
              </Link>
            </li>
            <li>
              <Link style={{ ...styles }} to="/marketplace">
                Market palce
              </Link>
            </li>
            <li>
              <Link style={{ ...styles }} to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link style={{ ...styles }} to="/signup">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/marketplace">Market palce</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
