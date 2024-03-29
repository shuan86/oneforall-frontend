import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../../public/css/PixelGamePage.css";
import { CirclePicker } from "react-color";
import { Row } from "../../components/PixelGame/Row";
import { putPixelDataArray, putPixelData } from "../../modules/pixelGame";
import * as pixelGame from "../../modules/pixelGame";
import { useFirstUpdate } from "../../hooks/useFirstUpdate";
import NovicePixelDialog from "../../components/Dialog/NovicePixelDialog";
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
  const [novicePixelDialogFlag, setNovicePixelDialogFlag] = useState(true);

  const isNotFirst = useFirstUpdate()
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
    setClickPixelCount(clickPixelCountData);
  };
  const pixelGameFunc = (pos, color) => {
    setLoadPixelData([{ pos, color }]);
  };
  useEffect(() => {
    pixelGame.initPixelGame(joinPixelGameFunc, initMemberFunc, pixelGameFunc);
    return () => { };
  }, []);
  useEffect(() => {
    setCanClickPixelFlag((pre) => (clickPixelCount > 0 ? true : false));
    if (isNotFirst && clickPixelCount > 0) putPixelData(selectedPos, selectedColor);

    return () => { };
  }, [clickPixelCount]);
  const changeColor = (color) => {
    setSelectedColor(color.hex);
  };
  const onClickClearColor = (params) => {
    setSelectedColor("#ffffff");

  }

  for (let i = 0; i < height; i++) {
    rowArray.push(
      <Row
        key={"row" + (i + 1)}
        height={i}
        width={width}
        selectedColor={selectedColor}
        selectedPos={selectedPos}
        setSelectedPos={setSelectedPos}
        setSelectedDataArray={setSelectedDataArray}
        loadPixelData={loadPixelData}
        clickPixelCount={clickPixelCount}
        setClickPixelCount={setClickPixelCount}
      />
    );
  }
  return (
    <div className="pixelContainer">
      <NovicePixelDialog isOpen={novicePixelDialogFlag} setIsOpen={setNovicePixelDialogFlag} />
      <div className="colorCountDown">
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        <Button variant="contained" style={{ margin: "0 45%" }} onClick={onClickClearColor}>White</Button>
        <p>本日剩餘次數</p>
        <h1>{clickPixelCount}</h1>
        {loadPixelFlag ? <div className="">{rowArray}</div> : null}
      </div>
    </div>
  );
};

export default PlaceGamePage;
