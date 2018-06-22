import React, { Component } from 'react';
import ButtonClick from './components/Buttonclick';
import { createStore } from 'redux';
import './App.css';
import demo from './reducers/foods-reducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log(this.state.count);
    return (
      <div className="App">
        <p>Count: {this.state.count}</p>
        <ButtonClick handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
