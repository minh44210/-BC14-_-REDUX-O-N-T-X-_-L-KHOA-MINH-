import React, { Component } from "react";

import Bot from "./Bot";
import Player from "./Player";
import KetQua from "./KetQua";
import { connect } from "react-redux";

class BaiTapOanTuTi extends Component {
  render() {
    const { ranDom } = this.props;

    return (
      <div className="gameOanTuXi">
        <style></style>
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQua />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="font btn btn-success display-4 p-3"
            >
              PLAY GAME !!!
            </button>
          </div>
          <div className="col-4">
            <Bot />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // Hàm lập đi lập lại
      let randomInterval = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;

        if (count >= 10) {
          clearInterval(randomInterval);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 10);
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapOanTuTi);
