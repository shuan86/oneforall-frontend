import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MemberCard,
  VistorRight,
  ReviewerRight,
  AuthorRight,
} from "../../components/Member/MemberCard";
import Filter from "../../components/Member/MemberFilter";
import { EnumMemberStatus } from "../../interfaces/IMember";
import { getArticleTitles } from "../../modules/article";
import { useFirstUpdate } from "../../hooks/useFirstUpdate";
const MemberPage = () => {
  const isNotFirst = useFirstUpdate();
  const [
    reportedVoteArticleArrayState,
    setReportedVoteArticleArrayState,
  ] = useState([]);
  const [
    reviewerCanReviewArticleArrayState,
    setReviewerCanReviewArticleArrayState,
  ] = useState([]);
  const [memberStatus, setMemberStatus] = useState(EnumMemberStatus.vistor);
  const isReviewer = useSelector((state) => state.memberStatus.isReviewer);
  const isPublisher = useSelector((state) => state.memberStatus.isPublisher);
  // const [isReviewer, setIsReviewer] = useState(useSelector((state) => state.memberStatus.isReviewer))
  // const [isPublisher, setIsPublisher] = useState(useSelector((state) => state.memberStatus.isPublisher))
  // const [filter, setFliter] = useState({vistor:true,publisher:false,reviewer:false})
  const [memberFilter, setMemberFliter] = useState([true, false, false]);
  const member = useSelector((state) => state.member);

  // const exp = useSelector((state) => state.member.exp);
  // const fllowerAmount = useSelector((state) => state.member.fllowerAmount);
  // const reportedVoteArticleIdArray = useSelector(
  //   (state) => state.member.reportedVoteArticleIdArray
  // );
  useEffect(() => {
    return () => {};
  }, [memberStatus]);
  useEffect(() => {
    const asyncFunc = async () => {
      let reportedVoteArticleArray;
      let reviewerCanReviewArticleArray;
      console.log(
        "reportedVoteArticleIdArray:",
        member.reportedVoteArticleIdArray
      );
      if (memberFilter[0]) {
        if (
          member.reportedVoteArticleIdArray &&
          member.reportedVoteArticleIdArray.length > 0
        ) {
          reportedVoteArticleArray = await getArticleTitles(
            member.reportedVoteArticleIdArray
          );
          console.log("reportedVoteArticles:", reportedVoteArticleArray);
        }
      } else if (memberFilter[1]) {
        console.log(
          " member.reviewerCanReviewArticleArray:",
          member.reviewerCanReviewArticleArray
        );
        if (
          member.reviewerCanReviewArticleArray &&
          member.reviewerCanReviewArticleArray.length > 0
        ) {
          reviewerCanReviewArticleArray = await getArticleTitles(
            member.reviewerCanReviewArticleArray
          );
          console.log(
            "reviewerCanReviewArticleArray:",
            reviewerCanReviewArticleArray
          );
        }
      } else if (memberFilter[2]) {
      }
      setReportedVoteArticleArrayState((pre) =>
        reportedVoteArticleArray ? reportedVoteArticleArray : pre
      );
      setReviewerCanReviewArticleArrayState((pre) =>
        reviewerCanReviewArticleArray ? reviewerCanReviewArticleArray : pre
      );
    };
    isNotFirst && asyncFunc();
    return () => {};
  }, [member, memberFilter]);
  return (
    <div className="container">
      <Filter setMemberFliter={setMemberFliter} />
      <div className="memberContainer">
        <MemberCard />
        {memberFilter[0] ? (
          <VistorRight
            isReviewer={isReviewer}
            isPublisher={isPublisher}
            exp={member.exp}
            fllowerAmount={member.fllowerAmount}
            reportedVoteArticleArray={reportedVoteArticleArrayState}
          />
        ) : null}
        {memberFilter[1] ? (
          <ReviewerRight
            exp={member.exp}
            fansAmount={member.fansAmount}
            reviewerCanReviewArticleArray={reviewerCanReviewArticleArrayState}
          />
        ) : null}
        {memberFilter[2] ? <AuthorRight /> : null}
      </div>
    </div>
  );
};

export default MemberPage;
