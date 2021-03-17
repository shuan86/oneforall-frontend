import React, { useState, useEffect } from "react";
import { getNews } from "../modules/article";
const useGetNews = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newsDatas, setNewsDatas] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(false);
  //   useEffect(() => {
  //     setNewsDatas([]);
  //     return () => {};
  //   }, [pageNumber]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const eveyRequestDataAmount = 2;
        setLoading(true);
        setError(false);
        const result = await getNews(
          pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
          eveyRequestDataAmount * pageNumber
        );
        const [articleDatas, articleDataAmount] = result;
        setNewsDatas((pre) => {
          const tmpData = result
            ? [...new Set([...pre, ...articleDatas])]
            : pre;
          setHasMoreData(articleDataAmount > tmpData.length);

          console.log(
            "pre:",
            pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
            eveyRequestDataAmount * pageNumber
          );
          console.log("new articleDatas:", articleDatas);

          console.log("tmpData:", tmpData);
          return tmpData;
        });
        setLoading(false);
      } catch (error) {
        console.log("useGetNews error:", error);
        setError(true);
      }
    };
    loadData();
    return () => {};
  }, [pageNumber]);

  return { loading, newsDatas, hasMoreData, error };
};

export default useGetNews;
