import React from "react";
import Gif from "./Gif";

const GifList = (props) => {
  const flickrs = props.data;
  let flickrResult = flickrs.map((flickr) => (
    <Gif key={flickr.id.toString()} photo={flickr.photo} />
  ));

  return <ul className="gif-list">{flickrResult}</ul>;
};

export default GifList;
