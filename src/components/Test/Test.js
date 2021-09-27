import React, { useEffect, useState, useRef, useCallback } from "react";

export const TestCard = React.memo(
  ({ id }) => {
    return <span>id</span>;
  },
  (prevProps, nextProps) => {
    return prevProps.id == nextProps.id;
  }
);
