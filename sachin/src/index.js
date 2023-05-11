import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav.js";
import Image from "./Image.js";
import Text from "./Text.js";
import "./style.css";

function Sachin(){
  return(
    <>
      <Nav />
    <ol className="order">
      <li><Image /></li>
      <li><Text /></li>
    </ol> 
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sachin />);

