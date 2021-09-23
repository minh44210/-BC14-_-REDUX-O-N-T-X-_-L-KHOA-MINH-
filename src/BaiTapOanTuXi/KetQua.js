import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div>
        <div className="font display-4 text-warning">{this.props.ketQua}</div>
        <hr />
        <div className="font display-4 text-success">
          Tổng số bàn Thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="font display-4 text-success">
          Tổng số bàn Chơi:{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.MainOanTuXi.ketQua,
    soBanThang: state.MainOanTuXi.soBanThang,
    soBanChoi: state.MainOanTuXi.soBanChoi,
  };
};

export default connect(mapStateToProps)(KetQua);
