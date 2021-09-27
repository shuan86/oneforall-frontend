import React, { useState, useCallback } from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// export const PixelButtonDiv = React.memo(
//   ({ color, index, selectedIndex, setSelectedIndex }) => {
//     const selectArea = {
//       display: "inline-block",
//       boxShadow: "none",
//       textTransform: "none",
//       backgroundColor: color,
//       borderColor: "black",
//       height: "30px",
//       width: "10px",
//     };
//     const root = {
//       boxShadow: "none",
//       textTransform: "none",
//       backgroundColor: color,
//       borderColor: "black",
//       height: "30px",
//       width: "10px",
//       "&:hover": {
//         backgroundColor: color,
//         borderColor: "#0062cc",
//         boxShadow: "none",
//       },
//       "&:active": {
//         boxShadow: "none",
//         backgroundColor: "#0062cc",
//         borderColor: "#005cbf",
//       },
//       "&:focus": {
//         boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
//       },
//     };
//     const SelectButton = withStyles({
//       root,
//     })(Button);

//     const onClickPixelBtn = () => {
//       setSelectedIndex(index);
//     };
//     return (
//       <div style={selectArea} onClick={onClickPixelBtn}>
//         {/* <SelectButton variant="contained" color="primary">
//           {" "}
//         </SelectButton> */}
//         {<button style={selectArea}></button>}
//       </div>
//     );
//   },
//   (pre, next) => {
//     if (next.selectedIndex != next.index) {
//       return true;
//     }
//     if (next.selectedIndex == -1) return true;

//     return false;
//   }
// );
export const Pixel = React.memo(
  ({ selectedColor }) => {
    const [pixelColor, setPixelColor] = useState("#fff");
    const [oldColor, setOldColor] = useState(pixelColor);
  },
  (pre, next) => { }
);
