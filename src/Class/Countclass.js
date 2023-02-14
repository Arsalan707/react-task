import React, { Component } from 'react';

// state in class is private but we can use it in other class with some js tricks

export default class Countclass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    this.setState({ count: this.state.count + 1 });
  }
  decrease() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h1>Countclass :{this.state.count}</h1>
        <button onClick={this.increase}>add</button>
        <button onClick={this.decrease} disabled={this.state.count <= 0}>
          subtract
        </button>
      </div>
    );
  }
}
