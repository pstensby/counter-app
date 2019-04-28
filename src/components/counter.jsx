import React, { Component } from "react";
import { throwStatement } from "@babel/types";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    return (
      "badge m-2 badge-" +
      (this.props.counter.value === 0 ? "warning" : "primary")
    );
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
