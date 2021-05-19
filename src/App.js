import React, { Component } from "react";
import "./App.css";
import myImage from "./images/profileImg.jpg";
export default class App extends Component {
  state = {
    Person: {
      fullName: "Ghada Gheir",
      bio: "i just love coding",
      profession: "Telecom Engineer",
      imagesrc: myImage,
    },
    show: true,
    count: 0,
  };
  componentDidMount() {
    setInterval(() => {
      if (this.state.show) {
        this.setState({ count: this.state.count + 1 });
      } else {
        this.setState({ count: 0 });
      }
    }, 1000);
  }

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  render() {
    return (
      <>
        {this.state.show && (
          <div className="container">
            <div className="card-container">
              <div className="upper-container">
                <div className="image-container">
                  <img
                    src={this.state.Person.imagesrc}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
              </div>
              <div className="lower-container">
                <h3> FullName: {this.state.Person.fullName} </h3>
                <h4> Profession: {this.state.Person.profession}</h4>
                <p> Bio: {this.state.Person.bio} </p>
                <h1>{this.state.count}</h1>
              </div>
            </div>
          </div>
        )}
        <div className="btn">
          <button onClick={this.toggle}>Click here</button>
        </div>
      </>
    );
  }
}
