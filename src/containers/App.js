import React, { Component } from "react";
import "./App.css";

import axios from "axios";

import Temps from "../components/Temps";

class App extends Component {
  state = {
    recent_temps: null,
  };

  componentDidMount() {
    axios.get("/temp/recent/10").then((response) => {
      this.setState({ recent_temps: response.data });
    });
  }

  render() {
    let temps = <p style={{ textAlign: "center" }}>Loading...</p>;

    if (this.state.recent_temps) {
      temps = <Temps temps={this.state.recent_temps} />;
    }

    return <div className="App">{temps}</div>;
  }
}

export default App;
