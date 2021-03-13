import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MemberCard,
  VistorRight,
  ReviewerRight,
} from "../../components/Member/MemberCard";
import { EnumMemberStatus } from "../../interfaces/IMember";
import { useHistory } from "react-router-dom";

const MemberPage = () => {
  const history = useHistory();
  const [memberStatus, setMemberStatus] = useState(EnumMemberStatus.vistor);

  const isReviewer = useSelector((state) => state.memberStatus.isReviewer);
  const isPublisher = useSelector((state) => state.memberStatus.isPublisher);
  // const [isReviewer, setIsReviewer] = useState(useSelector((state) => state.memberStatus.isReviewer))
  // const [isPublisher, setIsPublisher] = useState(useSelector((state) => state.memberStatus.isPublisher))

  useEffect(() => {
    return () => {};
  }, []);
  useEffect(() => {
    // if (memberStatus == EnumMemberStatus.vistor) {
    // } else if (memberStatus == EnumMemberStatus.reviewer) {
    // } else if (memberStatus == EnumMemberStatus.publisher) {
    // }
    return () => {};
  }, [memberStatus]);
  const onClickChangeMemberStatus = (status) => {
    if (status == EnumMemberStatus.publisher) {
      history.push("/publisher");
    } else if (status == EnumMemberStatus.reviewer) {
      history.push("/reviewer");
    }
  };

  return (
    <div className="container">
      {isReviewer ? (
        <button
          onClick={() => onClickChangeMemberStatus(EnumMemberStatus.reviewer)}
        >
          審查者
        </button>
      ) : null}
      {isPublisher ? (
        <button
          onClick={() => onClickChangeMemberStatus(EnumMemberStatus.publisher)}
        >
          發文者
        </button>
      ) : null}

      <div className="memberContainer">
        <MemberCard />
        {memberStatus == EnumMemberStatus.vistor ? (
          <VistorRight isReviewer={isReviewer} isPublisher={isPublisher} />
        ) : null}
        {memberStatus == EnumMemberStatus.reviewer ? <ReviewerRight /> : null}
        {memberStatus == EnumMemberStatus.publisher ? <ReviewerRight /> : null}
      </div>
    </div>
  );
};

export default MemberPage;
