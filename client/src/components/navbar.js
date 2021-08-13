import React from "react";
import { Link } from "react-router-dom";

const styles = {
    Link:{
        textDecoration: 'none'
    }
}

function navbar() {
  return (
    <>
      <nav>
        <Link to="/main" style={styles.Link}>
          <h1>Insipre</h1>
        </Link>
        <ul>
        <li>
            <Link to="/main" style={styles.Link}>Main</Link>
          </li>
          <li>
            <Link to="/marketplace" style={styles.Link}>Market palce</Link>
          </li>
          <li>
            <Link to="/profile" style={styles.Link}>Profile</Link>
          </li>
          <li>
            <Link to="/signin" style={styles.Link}>Sign in</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default navbar;
