import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "John Ajala",
        bio: "A passionate developer",
        imgSrc: "https://pixlr.com/images/index/ai-image-generator-two.webp",
        profession: "Software Engineer"
      },
      shows: false,
      lastMounted: new Date(),
      intervalId: null,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ timeElapsed: Math.floor((new Date() - this.state.lastMounted) / 1000) });
    }, 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {this.state.shows ? "Hide Profile" : "Show Profile"}
          </button>
          {this.state.shows && (
            <div>
              <h1>{this.state.Person.fullName}</h1>
              <p>{this.state.Person.bio}</p>
              <img src={this.state.Person.imgSrc} alt="Profile" />
              <h2>{this.state.Person.profession}</h2>
            </div>
          )}
          <p>Time since component mounted: {this.state.timeElapsed} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
