import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.seeMovieDetails = this.seeMovieDetails.bind(this);
    this.closeMovieDetails = this.closeMovieDetails.bind(this);

    this.state = {
      isOpen: false
    };
  }

  seeMovieDetails() {
    this.setState({
      isOpen: true
    });
  }

  closeMovieDetails(event) {
    event.stopPropagation();
    this.setState({
      isOpen: false
    });
  }

  render() {
    const bodyStyle = {
      height: "130px",
      overflow: "hidden"
    };

    const cardImageStyle = {
      backgroundColor: "black",
      backgroundPosition: "center top",
      backgroundImage: `url(http://image.tmdb.org/t/p/w300/${
        this.props.data.poster_path
      })`,
      backgroundSize: "cover"
    };

    return (
      <div
        className={this.state.isOpen ? "card opened" : "card"}
        onClick={this.seeMovieDetails}
      >
        <div className="card-image" style={cardImageStyle} />
        <div className="card-body" style={bodyStyle}>
          <h5 className="card-title" title={this.props.data.title}>
            {this.props.data.title}
          </h5>
          <p className="card-text mb-0">
            Release date: {this.props.data.release_date}
          </p>
          <p className="card-text mb-0">
            Score: {this.props.data.vote_average}
          </p>
          <button className="btn btn-danger" onClick={this.closeMovieDetails}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Movie;

// const Movie = props => {
//   this.state = {
//     isOpen: false
//   };

//   const bodyStyle = {
//     height: "130px",
//     overflow: "hidden"
//   };

//   const cardImageStyle = {
//     backgroundColor: "black",
//     backgroundPosition: "center top",
//     backgroundImage: `url(http://image.tmdb.org/t/p/w300/${
//       props.data.poster_path
//     })`,
//     backgroundSize: "cover"
//   };

//   const seeMovieDetails = () => {
//     this.setState({
//       isOpen: true
//     });
//   };

//   return (
//     <div className="card" onClick={this.seeMovieDetails}>
//       <div className="card-image" style={cardImageStyle} />
//       <div className="card-body" style={bodyStyle}>
//         <h5 className="card-title" title={props.data.title}>
//           {props.data.title}
//         </h5>
//         <p className="card-text mb-0">
//           Release date: {props.data.release_date}
//         </p>
//         <p className="card-text mb-0">Score: {props.data.vote_average}</p>
//       </div>
//     </div>
//   );
// };

// export default Movie;
