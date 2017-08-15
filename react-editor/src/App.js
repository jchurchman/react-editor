import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: props.initialMessage,
      color: '#4682b4'
    }
  }

  handleChange({name, value}) {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <label>
            Message:
            <input name="message" value={this.state.message}
            onChange={({target}) => this.handleChange(target)}/>
          </label>
          <label>
            Color:
            <input name="color" value={this.state.color} type="color"
            onChange={({ target }) => this.handleChange(target)}/>
          </label>
        </div>
        <div className="display" style={{
          color: this.state.color
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
