import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

export const useGetParams = () => {
  const { pathname, search } = useLocation();
  let { articleId } = useParams();
  useEffect(() => {
    return () => { };
  }, []);
  return articleId;
};
