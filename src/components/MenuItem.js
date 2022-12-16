import { colors } from "@material-ui/core";
import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <button style={{ marginLeft : 20,}}>ADD</button>
         
        
    </div>
  );
}

export default MenuItem;
