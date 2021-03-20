import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { EnumMemberStatus } from "../../interfaces/IMember";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { SelectButtonDiv } from "../../components/PlaceGame/SelectButtonDiv";
import "../../public/css/PlaceGamePage.css";
import { CirclePicker } from "react-color";
import { Row } from "../../components/PlaceGame/Row";
const PlaceGamePage = () => {
  const height = 40;
  const width = 40;
  const rowArray = [];
  //   const pixelArray = Array.from({ length: 3600 });
  const [selectedColor, setSelectedColor] = useState("#f44336");
  const [selectedPos, setSelectedPos] = useState(-1);

  const changeColor = (color) => {
    setSelectedColor(color.hex);
    console.log("changeColor:", color.hex);
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
      />
    );
  }
  return (
    <div className="pxelContainer">
      <div>
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      </div>
      <div>{rowArray}</div>
    </div>
  );
};

export default PlaceGamePage;
