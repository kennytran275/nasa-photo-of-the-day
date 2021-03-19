import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`
  color: red;

  h1 {
    color: ${(prop) => prop.theme.primaryColor};
  }
`;

const Photo = (props) => {
  const { photo } = props;

  return (
    <StyledPhoto>
      <div className="photo-image-wrapper">
        <img alt="photo thumbnail" src={photo.url} />
      </div>
      <h1>{photo.title}</h1>
      <h2>{photo.copyright}</h2>
      <h3>{photo.date}</h3>
      <p>{photo.explanation}</p>
    </StyledPhoto>
  );
};

export default Photo;
