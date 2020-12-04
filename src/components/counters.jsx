import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter} // This is the better way to pass parameters, it's a clean way :-)
            // value={ counter.value }
            // id={ counter.id }
          />
        ))}
      </div>
    );
  }
}

export default Counters;
