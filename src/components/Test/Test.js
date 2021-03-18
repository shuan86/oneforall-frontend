import React, { useEffect, useState, useRef, useCallback } from "react";

export const TestCard = React.memo(
  ({ id }) => {
    console.log("Rendering NumChoice:", id);

    return <span>id</span>;
  },
  (prevProps, nextProps) => {
    console.log("In prevProps:");
    console.log(prevProps.id);

    return prevProps.id == nextProps.id;
  }
);
