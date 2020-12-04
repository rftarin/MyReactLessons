import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import Fundo from "./resources/iron_texture1049.jpg";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handlerIncrement = (counter) => {
    const counters = [...this.state.counters]; // It makes a clone of counters inside state
    const index = counters.indexOf(counter); // Lets get index of button
    counters[index] = { ...counter }; // It makes a clone only of a button from array
    counters[index].value++; // Increment it.
    this.setState({ counters }); // Update state of it.
  };

  handlerDelete = (counterId) => {
    //
    // Here we make a filter to exclude a deleted button
    //
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); // Same of -> this.setState({ counters: counters })
  };

  handlerReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <img
          src={Fundo}
          alt=""
          style={{ width: "100%", height: window.innerHeight }}
        ></img>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "50px",
            left: 0,
            top: 0,
            right: 0,
            margin: "auto",
            zIndex: "9999",
            backgroundColor: "#ff0000",
          }}
        >
          {" "}
          <NavBar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
        </div>

        <div
          style={{
            position: "absolute",
            width: "250px",
            height: "240px",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            zIndex: "9999",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            border: "1px solid red",
            borderRadius: "25px",
          }}
        >
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handlerReset}
              onIncrement={this.handlerIncrement}
              onDelete={this.handlerDelete}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
