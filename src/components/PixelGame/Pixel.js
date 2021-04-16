import React, { useState, useEffect } from "react";
import { putPixelData, dbColorNumberToStr } from "../../modules/pixelGame";
import { useFirstUpdate } from "../../hooks/useFirstUpdate";

export const Pixel = React.memo(
  ({
    selectedColor,
    pos,
    setSelectedPos,
    loadPixelData,
    clickPixelCount,
    setClickPixelCount,

    selectedPos,
  }) => {
    const [pixelColor, setPixelColor] = useState("#ffffff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    const isNotFirst = useFirstUpdate()

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
      return () => { };
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
      setPixelColor((pre) => (clickPixelCount > 0 ? selectedColor : pre));
      setSelectedPos((pre) => (clickPixelCount > 0 ? pos : pre));
      setCanChangeColor(clickPixelCount > 0 ? false : true);
      setClickPixelCount((pre) => (clickPixelCount > 0 ? pre - 1 : pre));

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
      console.log('next.selectedPos:', next.selectedPos);
      console.log('next.pos:', next.pos);
      console.log('pre.pos:', pre.pos);
      console.log('next.selectedColor:', next.selectedColor);
      console.log('pre.selectedColor:', pre.selectedColor);
    }
    if (next.loadPixelData != undefined) {
      for (let i = 0; i < next.loadPixelData.length; i++) {
        if (next.loadPixelData[i].pos == next.pos) {
          return false;
        }
      }
    }

    if (next.selectedPos == next.pos && pre.selectedColor != next.selectedColor) {

      return false
    }
    if (pre.selectedColor != next.selectedColor)
      return false

    return true;
  }
);
