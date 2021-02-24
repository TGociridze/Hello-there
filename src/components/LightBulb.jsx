import React from "react";

import Button from "./Button";

import broken from "../img/broken.svg";
import idea from "../img/idea.svg";
import hello from "../img/hello.svg";

class LightBulb extends React.Component {
  state = {
    isOn: true,
    text: "Hello there",
    count: 0,
    address: hello,
    alter: "hello",
  };

  handleClick = (event) => {
    this.setState((prevState) => {
      return {
        isOn: !prevState.isOn,
        count: prevState.count + 1,
      };
    });

    if (this.state.isOn) {
      this.setState({ text: "I've got an idea" });
      this.setState({ address: idea });
      this.setState({ alter: "IdeaLightbulb" });
    } else {
      this.setState({ text: "My idea has gone" });
      this.setState({ address: broken });
      this.setState({ alter: "brokenLightbulb" });
    }
  };

  handleback = (event) => {
    this.setState((prevState) => {
      return {
        isOn: false,
        count: 0,
        text: "Hello there",
        address: hello,
        alter: "hello",
      };
    });
  };

  render() {
    const iconStyle = {
      width: "100px",
      height: "50px",
      marginTop: "10px",
    };
    const { isOn, text, address, alter } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <img src={address} alt={alter} style={iconStyle} />
        <h2>{text}</h2>
        <hr />
        <Button style={{ padding: "15px" }} onClick={this.handleClick}>
          Turn {isOn ? "On" : "OFF"}
        </Button>
        <Button style={{ padding: "15px" }} onClick={this.handleback}>
          Start again
        </Button>
      </div>
    );
  }
}

export default LightBulb;
