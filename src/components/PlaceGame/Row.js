import React, { useState, useEffect } from "react";
import { Pixel } from "./Pixel";
export const Row = ({
  height,
  width,
  selectedColor,
  setSelectedPos,
  selectedPos,
}) => {
  const [rowIndex, setRowIndex] = useState(-1);
  const pixelArray = [];
  useEffect(() => {
    setRowIndex(height);
    return () => {};
  }, []);

  for (let i = 0; i < width; i++) {
    pixelArray.push(
      <Pixel
        key={"Pixel" + (height * width + (i + 1))}
        pos={height * width + (i + 1)}
        selectedColor={selectedColor}
        setSelectedPos={setSelectedPos}
        selectedPos={selectedPos}
      />
    );
  }
  return <div className="row">{pixelArray}</div>;
};
