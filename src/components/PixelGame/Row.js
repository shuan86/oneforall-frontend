import React, { useState, useEffect } from "react";
import { Pixel } from "./Pixel";
export const Row = ({
  height,
  width,
  selectedColor,
  selectedPos,
  setSelectedPos,
  loadPixelData,
  clickPixelCount,
  setClickPixelCount,

}) => {
  const pixelArray = [];
  for (let i = 0; i < width; i++) {
    pixelArray.push(
      <Pixel
        key={"Pixel" + (height * width + (i + 1))}
        pos={height * width + (i + 1)}
        selectedColor={selectedColor}
        setSelectedPos={setSelectedPos}
        loadPixelData={loadPixelData}
        selectedPos={selectedPos}
        clickPixelCount={clickPixelCount}
        setClickPixelCount={setClickPixelCount}
      />
    );
  }
  return <div className="row">{pixelArray}</div>;
};
