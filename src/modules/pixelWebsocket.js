import webSocket from "socket.io-client";
import config from "../config.json";

const port = 3001;
let ws = null;
export const pixelGameEvent = {
  joinPixelGame: "joinPixelGame",
  initMemberData: "initMemberData",
  pixelGame: "pixelGame",
};


export const startPixelGameWebSocket = (
  token,
  memberId,
  joinPixelGameFunc,
  initMemberFunc,
  pixelGameFunc
) => {
  if (config.NODE_ENV == "development") {
    ws = webSocket(config.DEVELOPMENT_SERVER_URL);
  } else {
    ws = webSocket(config.PRODUCTION_SERVER_URL);
  }
  if (ws) {
    sendData(pixelGameEvent.joinPixelGame, { token, memberId });
    console.log("websocket success connect!");
    ws.on(pixelGameEvent.joinPixelGame, (msg) => {
      joinPixelGameFunc(msg);
    });
    ws.on(pixelGameEvent.initMemberData, (clickPixelCountData) => {
      initMemberFunc(clickPixelCountData);
    });
    ws.on(pixelGameEvent.pixelGame, (msg) => {
      const { pos, color } = msg;
      pixelGameFunc(pos, color);
    });
  }
};
export const sendData = (eventName, data) => {
  //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
  if (ws) ws.emit(eventName, data);
};
