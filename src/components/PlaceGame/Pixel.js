import React, { useState, useEffect } from "react";
export const Pixel = React.memo(
  ({ selectedColor, pos, selectedPos, setSelectedPos }) => {
    const [pixelColor, setPixelColor] = useState("#fff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    useEffect(() => {}, []);
    const changeColorOnHover = () => {
      setOldColor(pixelColor);
      setPixelColor(selectedColor);
    };
    const resetColor = () => {
      setPixelColor((pre) => (canChangeColor ? oldColor : pre));
      setCanChangeColor(true);
    };
    const onClickPixel = () => {
      console.log("selectedColor:", selectedColor);

      setPixelColor(selectedColor);
      setCanChangeColor(false);
      setSelectedPos(pos);
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
    // if (next.index == 2) {
    //   console.log(
    //     "next.selectedIndex:",
    //     next.selectedIndex,
    //     "next.index:",
    //     next.index,
    //     "pre selectedColor:",
    //     pre.selectedColor,
    //     "selectedColor:",
    //     next.selectedColor
    //   );
    // }
    if (next.selectedPos != next.pos && pre.selectedColor == next.selectedColor)
      return true;
    return false;
  }
);
