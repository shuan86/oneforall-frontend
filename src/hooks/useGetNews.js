import React, { useState, useEffect } from "react";
import {
  getNews,
  getUnderReviewedNews,
  getReviewedNews,
  ArticleType,
} from "../modules/article";
const useGetNews = (pageNumber, eveyRequestDataAmount, articleType) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newsDatas, setNewsDatas] = useState([]);
  const [hasMoreData, setHasMoreData] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(false);
        let result;
        if (articleType == ArticleType.Unreview) {
          result = await getNews(
            pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
            pageNumber * eveyRequestDataAmount
          );
        } else if (articleType == ArticleType.UnderReviewed) {
          result = await getUnderReviewedNews(
            pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
            pageNumber * eveyRequestDataAmount
          );
        } else if (articleType == ArticleType.Reviewed) {
          result = await getReviewedNews(
            pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
            pageNumber * eveyRequestDataAmount
          );
        }

        const [
          articleDatas,
          articleDataAmount,
          tmpIsMemberLikeArray,
          tmpIsMemberReportedArray,
        ] = result;
        setHasMoreData(articleDataAmount > newsDatas.length);
        setLoading(false);
        articleDatas = articleDatas.map((item, index) => ({
          ...item,
          isMemberLike: tmpIsMemberLikeArray[index],
          isMemberReported: tmpIsMemberReportedArray[index],
        }));
        setNewsDatas((pre) => {
          console.log(
            "setNewsDatas:",
            result ? [...new Set([...pre, ...articleDatas])] : pre
          );
          return result ? [...new Set([...pre, ...articleDatas])] : pre;
        });

        // setNewsDatas((pre) => {
        //   return pre;
        // });
      } catch (error) {
        console.log("useGetNews error:", error);
        setError(true);
      }
    };
    loadData();
    return () => {
      console.log("ummounted");
    };
  }, [pageNumber, articleType]);

  return { loading, newsDatas, hasMoreData, error };
};

export default useGetNews;
