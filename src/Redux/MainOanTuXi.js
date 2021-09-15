const stateList = {
  xiNgau: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "You Win!! 😁😁",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: "./img/bao.png",
  },
};

const MainOanTuXi = (state = stateList, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      console.log(action);
      // restet mảng
      let xiNgauUpdate = [...state.xiNgau];
      // tạo mảng cược mới
      xiNgauUpdate = xiNgauUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.xiNgau = xiNgauUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let randomNumber = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.xiNgau[randomNumber];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME":
      {
        let player = state.xiNgau.find((item) => item.datCuoc === true);
        let computer = state.computer;
        switch (player.ma) {
          case "keo":
            if (computer.ma === "keo") {
              state.ketQua = "Hòa nhau !!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "Bạn Thua";
            } else {
              state.soBanThang += 1;

              state.ketQua = "You Win!! 😁😁";
            }
            break;
          case " bua":
            if (computer.ma === "keo") {
              state.soBanThang += 1;

              state.ketQua = "You Win!! 😁😁";
            } else if (computer.ma === "bua") {
              state.ketQua = "Hòa nhau !!!";
            } else {
              state.ketQua = "Bạn Thua";
            }
            break;
          case "bao":
            if (computer.ma === "keo") {
              state.ketQua = "Bạn Thua";
            } else if (computer.ma === "bua") {
              state.soBanThang += 1;

              state.ketQua = "You Win!! 😁😁";
            } else {
              state.ketQua = "Hòa nhau !!!";
            }
            break;
          default:
            state.ketQua = "You Win!! 😁😁";
            return { ...state };
        }
      }
      state.soBanChoi += 1;
      return { ...state };

    default:
      return { ...state };
  }
};

export default MainOanTuXi;
