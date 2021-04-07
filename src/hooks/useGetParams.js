import React, { useEffect, useState } from "react";

import { useHistory, useLocation, useParams } from "react-router-dom";

export const useGetParams = () => {
  const { pathname, search } = useLocation();
  let { articleId } = useParams();

  useEffect(() => {
    console.log("pathname:", pathname, "search:", search);
    console.log("id:", articleId);
    return () => {};
  }, []);
  return articleId;
};
