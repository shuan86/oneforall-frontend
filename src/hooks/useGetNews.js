import React, { useState, useEffect } from "react";
import {
  getNews,
  getUnderReviewedNews,
  getReviewedNews,
  ArticleStatus,
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
        let tmpArticleDatas;
        let tmpArticleDataAmount;
        if (articleType == ArticleStatus.unreview) {
          result = await getNews(
            pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
            pageNumber * eveyRequestDataAmount
          );
          const {
            articleArray,
            accountArray,
            memberLikeArticleStatusArray,
            memberReportedArray,
            articleAmount,
          } = result;
          console.log("result123:", result);
          tmpArticleDataAmount = articleAmount;
          tmpArticleDatas = articleArray.map((item, index) => ({
            ...item,
            account: accountArray[index],
            isMemberLike: memberLikeArticleStatusArray[index],
            isMemberReported: memberReportedArray[index],
          }));
        } else if (articleType == ArticleStatus.underReview) {
          result = await getUnderReviewedNews(
            pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
            pageNumber * eveyRequestDataAmount
          );
          const {
            articleArray,
            accountArray,
            reportedAccountArray,
            evidenceArray,
            decisionReasonArray,
            reviewResultArray,
            memberLikeArticleStatusArray,
            hasReportedArray,
            reportedAgreeVoteArray,
            reportedDisagreeVoteArray,
            articleAmount,
          } = result;

          tmpArticleDataAmount = articleAmount;
          tmpArticleDatas = articleArray.map((item, index) => ({
            ...item,
            account: accountArray[index],
            reportedtAccount: reportedAccountArray[index],
            evidence: evidenceArray[index],
            isMemberLike: memberLikeArticleStatusArray[index],
            isMemberReported: hasReportedArray[index],
            decisionReason: decisionReasonArray[index],
            reviewResult: reviewResultArray[index],
            reportedAgreeVote: reportedAgreeVoteArray[index],
            reportedDisagreeVote: reportedDisagreeVoteArray[index],
          }));
          console.log("getUnderReviewedNews:", result);
        } else if (articleType == ArticleStatus.verified) {
          result = await getReviewedNews(
            pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
            pageNumber * eveyRequestDataAmount
          );
          const [
            articleDatas,
            authorAccountArray,
            tmpIsMemberLikeArray,
            tmpIsMemberReportedArray,
            articleDataAmount,
          ] = result;
          tmpArticleDataAmount = articleDataAmount;
          tmpArticleDatas = articleDatas.map((item, index) => ({
            ...item,
            account: authorAccountArray[index],
            isMemberLike: tmpIsMemberLikeArray[index],
            isMemberReported: tmpIsMemberReportedArray[index],
          }));
        }

        setHasMoreData(tmpArticleDataAmount > newsDatas.length);
        setLoading(false);

        setNewsDatas((pre) => {
          console.log(
            "setNewsDatas:",
            result ? [...new Set([...pre, ...tmpArticleDatas])] : pre
          );
          return result ? [...new Set([...pre, ...tmpArticleDatas])] : pre;
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
    return () => {};
  }, [pageNumber, articleType]);

  return { loading, newsDatas, hasMoreData, error };
};

export default useGetNews;
