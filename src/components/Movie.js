import React from "react";

const Movie = props => {
  const cardStyle = {
    height: "600px",
    overflow: "hidden"
  };

  const bodyStyle = {
    height: "130px",
    overflow: "hidden"
  };

  const cardImageStyle = {
    background: `black url(http://image.tmdb.org/t/p/w300/${
      props.data.poster_path
    }) center top no-repeat`,
    backgroundSize: "cover",
    width: "100%",
    height: "500px"
  };

  return (
    <div className="card" style={cardStyle}>
      <div style={cardImageStyle} />
      <div className="card-body" style={bodyStyle}>
        <h5 className="card-title" title={props.data.title}>
          {props.data.title}
        </h5>
        <p className="card-text mb-0">
          Release date: {props.data.release_date}
        </p>
        <p className="card-text mb-0">Score: {props.data.vote_average}</p>
      </div>
    </div>
  );
};

export default Movie;
