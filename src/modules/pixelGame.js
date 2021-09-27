import * as sendRequest from "./sendRequest";
import * as localStorage from "./localstorage";
import * as ws from "./pixelWebsocket";

export const initPixelGame = async (
  joinPixelGameFunc,
  initMemberFunc,
  pixelGameFunc
) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    ws.startPixelGameWebSocket(
      token,
      memberId,
      joinPixelGameFunc,
      initMemberFunc,
      pixelGameFunc
    );
    // joinPixelGame();
  } catch (error) {
    console.error("initPixelGame error:", error);
  }
};
export const joinPixelGame = (data) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    ws.sendData(ws.pixelGameEvent.joinPixelGame, { token, memberId });
  } catch (error) {
    console.error("joinPixelGame error:", error);
  }
  return null;
};
export const putPixelData = async (pos, color) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    ws.sendData(ws.pixelGameEvent.pixelGame, { token, memberId, pos, color });
  } catch (error) {
    console.error("putPixelData error:", error);
  }
  return null;
};
export const putPixelDataArray = async (data) => {
  try {
    const { token, memberId } = localStorage.getAllData();
    const dataObject = {
      pixelDataArray: data,
    };
    const result = await sendRequest.rsaTokenPutRequest(
      token,
      memberId,
      "/pixels",
      dataObject
    );
    if (result && result.status == 200) {
      return result.data;
    }
  } catch (error) {
    console.error("putPixelDataArray error:", error);
  }
  return null;
};

// export const putPixelData = async (data) => {
//   try {
//     const { token, memberId } = localStorage.getAllData();
//     const dataObject = {
//       pixelData: data,
//     };
//     const result = await sendRequest.rsaTokenPutRequest(
//       token,
//       memberId,
//       "/pixel",
//       dataObject
//     );
//     if (result && result.status == 200) {
//       return result.data;
//     }
//   } catch (error) {
//     console.error("putPixelData error:", error);
//   }
//   return null;
// };
export const dbColorNumberToStr = (num) => {
  if (num == 0) return "#ffffff";
  else if (num == 1) return "#f44336";
  else if (num == 2) return "#e91e63";
  else if (num == 3) return "#9c27b0";
  else if (num == 4) return "#673ab7";
  else if (num == 5) return "#3f51b5";
  else if (num == 6) return "#2196f3";
  else if (num == 7) return "#03a9f4";
  else if (num == 8) return "#00bcd4";
  else if (num == 9) return "#009688";
  else if (num == 10) return "#4caf50";
  else if (num == 11) return "#8bc34a";
  else if (num == 12) return "#ffeb3b";
  else if (num == 13) return "#ffc107";
  else if (num == 14) return "#ff9800";
  else if (num == 15) return "#ff5722";
  else if (num == 16) return "#795548";
  else if (num == 17) return "#607d8b";
};
