import React from "react";
import Photo from "./Photo";

const Photos = (props) => {
  const { photos } = props;

  return (
    <div className="photos-container-wrapper">
      {photos.map((photo) => {
        return <Photo key={photo.date} photo={photo} />;
      })}
    </div>
  );
};

export default Photos;
