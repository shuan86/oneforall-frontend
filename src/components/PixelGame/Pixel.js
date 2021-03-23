import React, { useState, useEffect } from "react";
import { putPixelData, dbColorNumberToStr } from "../../modules/pixelGame";

export const Pixel = React.memo(
  ({
    selectedColor,
    pos,
    setSelectedPos,
    loadPixelData,
    canClickPixelFlag,
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

      // setSelectedDataArray((pre) => {
      //   const index = pre.findIndex((item) => item.pos == pos);
      //   if (index != -1) {
      //     return pre;
      //   } else {
      //     return [...pre, { pos, color: selectedColor }];
      //   }
      // });
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
    if (next.pos == 10) {
      console.log(
        "next.selectedIndex:",
        next.selectedIndex,
        "next.pos:",
        next.pos,
        "pre selectedColor:",
        pre.selectedColor
      );
      // if (next.loadPixelData != undefined) {
      //   for (let i = 0; i < next.loadPixelData.length; i++) {
      //     if (next.loadPixelData[i].pos == next.pos) {
      //       console.log(
      //         "next.loadPixelData1123:",
      //         next.loadPixelData[0].pos,
      //         next.pos
      //       );

      //       return false;
      //     }
      //   }
      // }
    }
    if (next.loadPixelData != undefined) {
      for (let i = 0; i < next.loadPixelData.length; i++) {
        if (next.loadPixelData[i].pos == next.pos) {
          return false;
        }
      }
    }
    if (
      pre.selectedPos != next.pos &&
      next.selectedColor != next.selectedColor
    ) {
      return false;
    }
    // if (next.selectedPos != next.pos && pre.selectedColor == next.selectedColor)
    //   return true;
    return false;
  }
);
