import React from "react";

const Photo = (props) => {
  const { photo } = props;

  return (
    <div className="photo-border">
      <div className="photo-image-wrapper">
        <img alt="photo thumbnail" className="photo-image" src={photo.url} />
      </div>
      <h1>{photo.title}</h1>
      <h2>{photo.copyright}</h2>
      <h3>{photo.date}</h3>
      <p>{photo.explanation}</p>
    </div>
  );
};

export default Photo;
