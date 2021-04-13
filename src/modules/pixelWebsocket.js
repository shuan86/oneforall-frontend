import webSocket from "socket.io-client";
import config from "../config.json";
const port = 3001;
let ws = null;
export const pixelGameEvent = {
  joinPixelGame: "joinPixelGame",
  initMemberData: "initMemberData",
  pixelGame: "pixelGame",
};

export const connectPixelGameServer = () => {
  //開啟

  if (config.NODE_ENV == "development") {
    // ws = webSocket(`http://127.0.0.1:${port}`);
    ws = webSocket(`http://127.0.0.1:8080`);
    console.log("development url:http://127.0.0.1:8080");
  } else {
    const url = "oneforall-env-1.eba-p2pspuwy.us-east-2.elasticbeanstalk.com";
    ws = webSocket(url);
    console.log("production url:", url);
  }
};
export const startPixelGameWebSocket = (
  joinPixelGameFunc,
  initMemberFunc,
  pixelGameFunc
) => {
  if (ws) {
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
