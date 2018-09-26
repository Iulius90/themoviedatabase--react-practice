import React from "react";

class Header extends React.Component {
  render() {
    const navLinks = {
      cursor: "pointer"
    };
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          The Movie Database
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a
            className={this.props.tabs[0] ? "p-2 text-primary" : "p-2"}
            onClick={this.props.popularMovies}
            style={navLinks}
          >
            Popular
          </a>
          <a
            className={this.props.tabs[1] ? "p-2 text-primary" : "p-2"}
            onClick={this.props.upcomingMovies}
            style={navLinks}
          >
            Upcoming
          </a>
          <a
            className={this.props.tabs[2] ? "p-2 text-primary" : "p-2"}
            onClick={this.props.nowPlayingMovies}
            style={navLinks}
          >
            Now Playing
          </a>
          <a
            className={this.props.tabs[3] ? "p-2 text-primary" : "p-2"}
            onClick={this.props.topRatedMovies}
            style={navLinks}
          >
            Top Rated
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
