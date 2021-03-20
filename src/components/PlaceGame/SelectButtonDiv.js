import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
export const SelectButtonDiv = ({
  color,
  setSelectedColor,
  setSelectedIndex,
}) => {
  const selectArea = {
    display: "inline-block",
  };
  const root = {
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: color,
    borderColor: color,
    height: "100px",
    width: "250px",
    "&:hover": {
      backgroundColor: color,
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  };
  const SelectButton = withStyles({
    root,
  })(Button);
  const onClickBtn = () => {
    setSelectedColor(color);
    setSelectedIndex(-1);
    console.log("selectedColor:", color);
  };
  return (
    <div style={selectArea} onClick={onClickBtn}>
      <SelectButton variant="contained" color="primary">
        {" "}
      </SelectButton>
    </div>
  );
};
