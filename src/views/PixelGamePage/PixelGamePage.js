import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../../public/css/PixelGamePage.css";
import { CirclePicker } from "react-color";
import { Row } from "../../components/PixelGame/Row";
import { putPixelDataArray, putPixelData } from "../../modules/pixelGame";
import * as pixelGame from "../../modules/pixelGame";
const PlaceGamePage = () => {
  const height = 40;
  const width = 40;
  const rowArray = [];
  const [loadPixelData, setLoadPixelData] = useState([]);
  const [loadPixelFlag, setLoadPixelFlag] = useState(false);

  const [selectedColor, setSelectedColor] = useState("#f44336");
  const [selectedPos, setSelectedPos] = useState(-1);
  const [selectedDataArray, setSelectedDataArray] = useState([
    { pos: selectedPos, color: selectedColor },
  ]);
  const [clickPixelCount, setClickPixelCount] = useState(10);
  const [canClickPixelFlag, setCanClickPixelFlag] = useState(true);

  const joinPixelGameFunc = (data) => {
    setLoadPixelFlag((pre) => {
      if (data) {
        setLoadPixelFlag(true);
      }
      return false;
    });
    setLoadPixelData(data);
  };
  const initMemberFunc = (clickPixelCountData) => {
    console.log("initMemberFunc:", clickPixelCountData);
    console.log("clickPixelCountData:", clickPixelCountData);
    setClickPixelCount(clickPixelCountData);
  };
  const pixelGameFunc = (pos, color) => {
    console.log("pixelGameFunc:", { pos, color });
    setLoadPixelData([{ pos, color }]);
  };
  useEffect(() => {
    pixelGame.initPixelGame(joinPixelGameFunc, initMemberFunc, pixelGameFunc);
    return () => {};
  }, []);
  useEffect(() => {
    if (clickPixelCount > 0) putPixelData(selectedPos, selectedColor);
    setClickPixelCount((pre) => (clickPixelCount > 0 ? pre - 1 : pre));
    setCanClickPixelFlag((pre) => (clickPixelCount > 0 ? true : false));
    return () => {};
  }, [selectedPos]);
  const changeColor = (color) => {
    setSelectedColor(color.hex);
  };

  for (let i = 0; i < height; i++) {
    rowArray.push(
      <Row
        key={"row" + (i + 1)}
        height={i}
        width={width}
        selectedColor={selectedColor}
        setSelectedPos={setSelectedPos}
        selectedPos={selectedPos}
        setSelectedDataArray={setSelectedDataArray}
        loadPixelData={loadPixelData}
        canClickPixelFlag={canClickPixelFlag}
      />
    );
  }
  return (
    <div className="pxelContainer">
      <div>
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      </div>
      <div>
        <h1>今日剩餘次數:{clickPixelCount}</h1>
      </div>
      {loadPixelFlag ? <div>{rowArray}</div> : null}
    </div>
  );
};

export default PlaceGamePage;
