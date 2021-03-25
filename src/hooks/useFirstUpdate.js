import React, { useState, useEffect, useRef } from "react";

export const useFirstUpdate = (articleId) => {
  const isNotFirstRun = useRef(false);
  const [notFirsStatus, setNotFirsStatus] = useState(false);
  useEffect(() => {
    if (isNotFirstRun.current == false) {
      isNotFirstRun.current = true;
      setNotFirsStatus(isNotFirstRun.current);
    }
  });
  return notFirsStatus;
};
