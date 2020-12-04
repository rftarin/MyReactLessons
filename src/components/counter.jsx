import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //    value: this.props.counter.value
  //};

  //
  // This is the common method used of bind events!!!
  //

  //constructor() {
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //}

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //
  // This is the other way to bind events, like an error function!!!
  // This is to make code more clean!
  //

  //handleIncrement = (product) => {
  //    this.setState({value: this.state.value + 1});
  //}

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // () => this.handleIncrement({ id: 1 })
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // Not used funcion, it just format with zero string in case of '0' number.
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
