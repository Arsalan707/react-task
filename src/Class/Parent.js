import React from 'react';
import { Child } from './Child';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur', age: 112 };
  }
  render() {
    return <Child name={this.state.name} age={this.state.age} />;
  }
}
