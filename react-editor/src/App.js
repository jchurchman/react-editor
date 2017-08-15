import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: props.initialMessage,
      color: '#4682b4',
      fontSize: 16,
      borderBool: false,
      border: 'none',
      posLeft: '10px',
      posTop: '10px'
    }
  }

  handleChange({name, value}) {
    if(name==='border'&&value==='false'){
      console.log(value)
      this.setState({
        borderBool: true,
        border: {
          width: '3px',
          color: '#aaa',
          style: 'solid'
        }
      })
    } else if(name==='border'&&value==='true') {
      console.log(value)
      this.setState({
        borderBool: false,
        border: 'none'
      })
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  jumpAround() {
    this.setState({
      posLeft: `${Math.floor(Math.random()*400)}px`,
      posTop: `${Math.floor(Math.random()*40)}px`
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" 
          onMouseEnter={({ target }) => this.jumpAround()} style={{
            left: this.state.posLeft,
            top: this.state.posTop
          }}/>
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
          <label>
            Font Size:
            <input name="fontSize" value={this.state.fontSize} type="range" min="16" max="160" step="16"
            onChange={({ target }) => this.handleChange(target)}/>
          </label>
          <label>
            Border:
            <input name="border" value={this.state.borderBool} type="checkbox"
            onChange={({ target }) => this.handleChange(target)}/>
          </label> 
        </div>
        <div className="display" style={{
          color: this.state.color,
          fontSize: this.state.fontSize,
          borderWidth: this.state.border.width,
          borderStyle: this.state.border.style,
          borderColor: this.state.border.color
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
