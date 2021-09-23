import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    const { xiNgau, datCuoc } = this.props;
    console.log(this.props.xiNgau);
    return (
      <div className="playerCSS">
        <div className="playerThing">
          <img
            className="mt-4 playerRote"
            width={80}
            height={80}
            src={xiNgau.find((item) => item.datCuoc === true).hinhAnh}
            alt={xiNgau.find((item) => item.datCuoc === true).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/player.png"
          alt="./img/player.png"
        />
        <div className="row">
          {xiNgau.map((item, index) => {
            // Xét giá trị đặt cược
            // tạo viền
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }

            return (
              <div key={index}>
                <div className="col-4">
                  <button
                    onClick={() => {
                      datCuoc(item.ma);
                    }}
                    style={border}
                    className="btnItem"
                  >
                    <img
                      width={70}
                      height={70}
                      src={item.hinhAnh}
                      alt={item.hinhAnh}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    xiNgau: state.MainOanTuXi.xiNgau,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
