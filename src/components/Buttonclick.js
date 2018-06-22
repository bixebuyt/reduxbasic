import React, { Component } from 'react';

class ButtonClick extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleClick = () => {
    this.props.handleClick();
  }
  render() {
    return (
      <div className="App">
          <a onClick={this.handleClick}>Click</a>
      </div>
    );
  }
}

export default ButtonClick;
