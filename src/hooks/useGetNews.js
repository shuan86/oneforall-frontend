import React, { useState, useEffect } from "react";
import { getNews } from "../modules/article";
const useGetNews = (pageNumber, eveyRequestDataAmount) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newsDatas, setNewsDatas] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await getNews(
          pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
          pageNumber * eveyRequestDataAmount
        );
        const [articleDatas, articleDataAmount] = result;
        setHasMoreData(articleDataAmount > newsDatas.length);
        setLoading(false);
        // setNewsDatas((pre) => {
        //   const tmpData = result
        //     ? [...new Set([...pre, ...articleDatas])]
        //     : pre;
        //   return tmpData;
        // });
        setNewsDatas((pre) => {
          return pre;
        });
      } catch (error) {
        console.log("useGetNews error:", error);
        setError(true);
      }
    };
    loadData();
    return () => {
      console.log("ummounted");
    };
  }, [pageNumber]);

  return { loading, newsDatas, hasMoreData, error };
};

export default useGetNews;
