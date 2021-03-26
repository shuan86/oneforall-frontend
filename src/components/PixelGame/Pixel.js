import React, { useState, useEffect } from "react";
import { putPixelData, dbColorNumberToStr } from "../../modules/pixelGame";

export const Pixel = React.memo(
  ({
    selectedColor,
    pos,
    setSelectedPos,
    loadPixelData,
    canClickPixelFlag,
    selectedPos,
  }) => {
    const [pixelColor, setPixelColor] = useState("#ffffff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    useEffect(() => {
      // for (let i = 0; i < loadPixelData.length; i++) {
      //   if (
      //     loadPixelData[i].pos == pos &&
      //     dbColorNumberToStr(loadPixelData[i].color) == color
      //   ) {
      //     setPixelColor(dbColorNumberToStr(loadPixelData[i].color));
      //     break;
      //   }
      // }
    }, []);
    useEffect(() => {
      let tmpColor = null;
      for (let i = 0; i < loadPixelData.length; i++) {
        if (
          loadPixelData[i].pos == pos &&
          dbColorNumberToStr(loadPixelData[i].color) != pixelColor
        ) {
          tmpColor = dbColorNumberToStr(loadPixelData[i].color);
          break;
        }
      }
      setPixelColor((pre) => (tmpColor ? tmpColor : pre));
      return () => {};
    }, [loadPixelData]);
    const changeColorOnHover = () => {
      setOldColor(pixelColor);
      setPixelColor(selectedColor);
    };
    const resetColor = () => {
      setPixelColor((pre) => (canChangeColor ? oldColor : pre));
      setCanChangeColor(true);
    };
    const onClickPixel = () => {
      setPixelColor((pre) => (canClickPixelFlag ? selectedColor : pre));
      setSelectedPos((pre) => (canClickPixelFlag ? pos : pre));
      setCanChangeColor(canClickPixelFlag ? false : true);
      console.log("onClickPixel:", selectedPos);
    };
    return (
      <div
        className="pixel"
        style={{ backgroundColor: pixelColor }}
        onMouseOver={changeColorOnHover}
        onMouseLeave={resetColor}
        onClick={onClickPixel}
      ></div>
    );
  },
  (pre, next) => {
    if (next.pos == 2) {
      // console.log(
      //   "next.selectedPos:",
      //   next.selectedPos,
      //   "next.pos:",
      //   next.pos,
      //   "pre selectedColor:",
      //   pre.selectedColor
      // );
      // if (pre.loadPixelData != undefined && next.loadPixelData != undefined) {
      //   console.log("pre:", pre.loadPixelData[0].pos);
      //   for (let i = 0; i < next.loadPixelData.length; i++) {
      //     if (
      //       next.loadPixelData[i].pos == pre.pos &&
      //       next.loadPixelData[i].color != pre.color
      //     ) {
      //       console.log("22222:", next.pos);
      //       return false;
      //     }
      //   }
      // }
      // if (
      //   next.selectedPos != next.pos &&
      //   pre.selectedColor != next.selectedColor
      // ) {
      //   console.log("ssss");
      //   return false;
      // }
      // return true;
    }
    if (next.loadPixelData != undefined) {
      for (let i = 0; i < next.loadPixelData.length; i++) {
        if (next.loadPixelData[i].pos == next.pos) {
          return false;
        }
      }
    }
    if (
      next.selectedPos != next.pos &&
      pre.selectedColor != next.selectedColor
    ) {
      return false;
    }

    return true;
  }
);
