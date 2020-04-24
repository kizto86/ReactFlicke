import React from "react";

const Gif = (props) => (
  <li className="gif-wrap">
    <img src={props.photo} alt="picture" />
  </li>
);

export default Gif;
