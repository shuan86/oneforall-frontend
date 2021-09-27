import React, { useState, useEffect } from "react";
import {
  getNews,
  getUnderReviewedNews,
  getReviewedNews,
  ArticleStatus,
} from "../modules/article";
const useGetNews = (pageNumber, eveyRequestDataAmount, articleStatus) => {
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
        if (articleStatus == ArticleStatus.unreview) {
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
          tmpArticleDataAmount = articleAmount;
          tmpArticleDatas = articleArray.map((item, index) => ({
            ...item,
            account: accountArray[index],
            isMemberLike: memberLikeArticleStatusArray[index],
            isMemberReported: memberReportedArray[index],
          }));
        } else if (
          articleStatus == ArticleStatus.underReview ||
          articleStatus == ArticleStatus.verified
        ) {
          if (articleStatus == ArticleStatus.underReview) {
            result = await getUnderReviewedNews(
              pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
              pageNumber * eveyRequestDataAmount
            );
          } else if (articleStatus == ArticleStatus.verified) {
            result = await getReviewedNews(
              pageNumber * eveyRequestDataAmount - eveyRequestDataAmount,
              pageNumber * eveyRequestDataAmount
            );
          }
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
            articleVoteResultArray,
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
            voteResult: articleVoteResultArray[index],
          }));
        }
        setHasMoreData(tmpArticleDataAmount > newsDatas.length);
        setLoading(false);
        setNewsDatas((pre) => {
          return result ? [...new Set([...pre, ...tmpArticleDatas])] : pre;
        });
      } catch (error) {
        setError(true);
      }
    };
    loadData();
    return () => { };
  }, [pageNumber, articleStatus]);

  return { loading, newsDatas, hasMoreData, error };
};

export default useGetNews;
