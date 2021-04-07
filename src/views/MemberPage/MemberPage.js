import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MemberCard,
  VistorRight,
  ReviewerRight,
  PublisherRight,
} from "../../components/Member/MemberCard";
import Filter from "../../components/Member/MemberFilter";
import { EnumMemberStatus } from "../../interfaces/IMember";
import { getArticleTitles } from "../../modules/article";
import { useFirstUpdate } from "../../hooks/useFirstUpdate";
import { useHistory } from "react-router-dom";

const MemberPage = () => {
  const isNotFirst = useFirstUpdate();
  const history = useHistory();
  const [
    reportedVoteArticleArrayState,
    setReportedVoteArticleArrayState,
  ] = useState([]);
  const [
    reviewerCanReviewArticleArrayState,
    setReviewerCanReviewArticleArrayState,
  ] = useState([]);
  const [
    reviewerVerifiedArticleArrayState,
    setReviewerVerifiedArticleArrayState,
  ] = useState([]);
  const [publishArticleArrayState, setPublishArticleArray] = useState([]);
  const isReviewer = useSelector((state) => state.memberStatus.isReviewer);
  const isPublisher = useSelector((state) => state.memberStatus.isPublisher);

  const [memberFilter, setMemberFliter] = useState([true, false, false]);
  const member = useSelector((state) => state.member);
  useEffect(() => {
    console.log("useEffectxxx");
    return () => {};
  }, []);
  useEffect(() => {
    const asyncFunc = async () => {
      let reportedVoteArticleIdArray = member.reportedVoteArticleIdArray;
      let reviewerCanReviewArticleIdArray =
        member.reviewerCanReviewArticleIdArray;
      let reviewerVerifiedArticleIdArray =
        member.reviewerVerifiedArticleIdArray;
      let publishArticleIdArray = member.publishArticleIdArray;
      let reportedVoteArticleArray;
      let reviewerCanReviewArticleArray;
      let reviewerVerifiedArticleArray;
      let publishArticleArray;
      console.log(
        "reportedVoteArticleIdArray:",
        member.reportedVoteArticleIdArray
      );
      if (memberFilter[0]) {
        if (
          reportedVoteArticleIdArray &&
          reportedVoteArticleIdArray.length > 0
        ) {
          reportedVoteArticleArray = await getArticleTitles(
            reportedVoteArticleIdArray
          );
          console.log("reportedVoteArticles:", reportedVoteArticleArray);
        }
      } else if (memberFilter[1]) {
        console.log(
          " reviewerCanReviewArticleIdArray:",
          reviewerCanReviewArticleIdArray
        );
        if (
          reviewerCanReviewArticleIdArray &&
          reviewerCanReviewArticleIdArray.length > 0
        ) {
          reviewerCanReviewArticleArray = await getArticleTitles(
            reviewerCanReviewArticleIdArray
          );
        }
        if (
          reviewerVerifiedArticleIdArray &&
          reviewerVerifiedArticleIdArray.length > 0
        ) {
          reviewerVerifiedArticleArray = await getArticleTitles(
            reviewerVerifiedArticleIdArray
          );
        }
      } else if (memberFilter[2]) {
        if (publishArticleIdArray && publishArticleIdArray.length > 0) {
          publishArticleArray = await getArticleTitles(publishArticleIdArray);
        }
      }
      setReportedVoteArticleArrayState((pre) =>
        reportedVoteArticleArray ? reportedVoteArticleArray : pre
      );
      setReviewerCanReviewArticleArrayState((pre) =>
        reviewerCanReviewArticleArray ? reviewerCanReviewArticleArray : pre
      );
      setReviewerVerifiedArticleArrayState((pre) =>
        reviewerVerifiedArticleArray ? reviewerVerifiedArticleArray : pre
      );
      setPublishArticleArray((pre) =>
        publishArticleArray ? publishArticleArray : pre
      );
    };
    asyncFunc();
    return () => {};
  }, [member, memberFilter]);

  const onClickArticle = (articleId) => {
    history.push("/articlePage/" + articleId);
  };
  const onClickReviewerPage = () => {
    history.push("/reviewer");
  };
  const onClickPublisherPage = () => {
    history.push("/publisher");
  };
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
            onClickArticle={onClickArticle}
          />
        ) : null}
        {memberFilter[1] ? (
          <ReviewerRight
            exp={member.exp}
            fansAmount={member.fansAmount}
            reviewerCanReviewArticleArray={reviewerCanReviewArticleArrayState}
            reviewerVerifiedArticleArray={reviewerVerifiedArticleArrayState}
            onClickReviewerPage={onClickReviewerPage}
            onClickArticle={onClickArticle}
          />
        ) : null}
        {memberFilter[2] ? (
          <PublisherRight
            publishArticleArray={publishArticleArrayState}
            onClickPublisherPage={onClickPublisherPage}
            onClickArticle={onClickArticle}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MemberPage;
