import React, { Component } from "react";
import { connect } from "react-redux";

class Bot extends Component {
  render() {
    let keyFrame = `@keyframes randomInterval${Date.now()}{
      0% {top; -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0;}

    }`;
    return (
      <div className="BotCSS">
        <style>{keyFrame}</style>
        <div className="playerThing " style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              animation: `randomInterval${Date.now()} 0.5s`,
              left: "30%",
            }}
            className="mt-4 playerRote2"
            width={80}
            height={80}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/playerComputer.png"
          alt="./img/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.MainOanTuXi.computer,
  };
};

export default connect(mapStateToProps)(Bot);
