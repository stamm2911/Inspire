import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
        <h1>
          ¡Thanks for your purchase!<i className="medium material-icons">mood</i>
        </h1>
        <Link to="marketplace">
          <h2>
            <i className="medium material-icons">arrow_back</i> Back to market
            place
          </h2>
        </Link>
      </div>
    </>
  );
}

export default Success;
