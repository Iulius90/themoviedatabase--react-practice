import React from "react";
import "./App.css";
import Movie from "./components/Movie";
import Header from "./components/Header";
import { splitResult } from "./helpers";
const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?api_key=";
const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
const NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=";
const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.popularMovies = this.popularMovies.bind(this);
    this.upcomingMovies = this.upcomingMovies.bind(this);
    this.nowPlayingMovies = this.nowPlayingMovies.bind(this);
    this.topRatedMovies = this.topRatedMovies.bind(this);

    this.state = {
      data: [],
      tabs: [true, false, false, false]
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
          tabs: [true, false, false, false]
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
          tabs: [false, true, false, false]
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
          tabs: [false, false, true, false]
        })
      );
  }

  topRatedMovies() {
    fetch(TOP_RATED_MOVIES + API_KEY)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({ data: data.results, tabs: [false, false, false, true] })
      );
  }

  renderItems() {
    if (this.state.data.length === 0) return <p>Loading</p>;

    if (this.state.data.length > 8) {
      let resultSplitted = splitResult(this.state.data, 8);
      console.log(resultSplitted);
      return (
        <div className="card-ct">
          {this.state.data.map(item => (
            <Movie key={item.id} data={item} />
          ))}
        </div>
      );
    }
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
