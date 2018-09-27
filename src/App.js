import React from "react";
import "./App.css";
import Movie from "./components/Movie";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const POPULAR_MOVIES = process.env.REACT_APP_POPULAR_MOVIES;
const UPCOMING_MOVIES = process.env.REACT_APP_UPCOMING_MOVIES;
const NOW_PLAYING_MOVIES = process.env.REACT_APP_NOW_PLAYING_MOVIES;
const TOP_RATED_MOVIES = process.env.REACT_APP_TOP_RATED_MOVIES;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.popularMovies = this.popularMovies.bind(this);
    this.upcomingMovies = this.upcomingMovies.bind(this);
    this.nowPlayingMovies = this.nowPlayingMovies.bind(this);
    this.topRatedMovies = this.topRatedMovies.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      data: [],
      tabs: [true, false, false, false],
      currentPage: 1,
      itemsPerPage: 8
    };
  }

  componentWillMount() {
    fetch(POPULAR_MOVIES + API_KEY)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          data: data.results
        })
      );
  }

  popularMovies() {
    fetch(POPULAR_MOVIES + API_KEY)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          data: data.results,
          tabs: [true, false, false, false],
          currentPage: 1
        })
      );
  }

  upcomingMovies() {
    fetch(UPCOMING_MOVIES + API_KEY)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          data: data.results,
          tabs: [false, true, false, false],
          currentPage: 1
        })
      );
  }

  nowPlayingMovies() {
    fetch(NOW_PLAYING_MOVIES + API_KEY)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          data: data.results,
          tabs: [false, false, true, false],
          currentPage: 1
        })
      );
  }

  topRatedMovies() {
    fetch(TOP_RATED_MOVIES + API_KEY)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          data: data.results,
          tabs: [false, false, false, true],
          currentPage: 1
        })
      );
  }

  handleClick(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  renderItems() {
    if (this.state.data.length === 0) return <p>Loading</p>;

    const { data, currentPage, itemsPerPage } = this.state;

    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={
            currentPage === number ? "btn btn-primary" : "btn btn-secondary"
          }
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="card-ct">
        {currentTodos.map(movie => {
          return <Movie key={movie.id} data={movie} />;
        })}

        <ul
          className="btn-group"
          style={{ gridColumn: "1/-1", padding: "0", margin: "0 auto" }}
        >
          {renderPageNumbers}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header
          upcomingMovies={this.upcomingMovies}
          popularMovies={this.popularMovies}
          topRatedMovies={this.topRatedMovies}
          nowPlayingMovies={this.nowPlayingMovies}
          tabs={this.state.tabs}
        />
        <div className="App">{this.renderItems()}</div>
      </div>
    );
  }
}

export default App;
