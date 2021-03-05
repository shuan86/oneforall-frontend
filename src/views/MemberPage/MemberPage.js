import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MemberCard,
  VistorRight,
  ReviewerRight,
} from "../../components/Member/MemberCard";
import { EnumMemberStatus } from "../../interfaces/IMember";

const MemberPage = () => {
  const [memberStatus, setMemberStatus] = useState(EnumMemberStatus.vistor);
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    if (memberStatus == EnumMemberStatus.vistor) {
    } else if (memberStatus == EnumMemberStatus.reviewer) {
    } else if (memberStatus == EnumMemberStatus.publisher) {
    }

    return () => {};
  }, [memberStatus]);
  const onClickChangeMemberStatus = (status) => {
    setMemberStatus(status);
  };
  const isReviewer = useSelector((state) => state.memberStatus.isReviewer);
  const isPublisher = useSelector((state) => state.memberStatus.isPublisher);
  console.log("isReviewer:", isReviewer);
  return (
    <div className="container">
      <button
        onClick={() => onClickChangeMemberStatus(EnumMemberStatus.vistor)}
      >
        觀看者
      </button>
      {isReviewer ? null : (
        <button
          onClick={() => onClickChangeMemberStatus(EnumMemberStatus.reviewer)}
        >
          審查者
        </button>
      )}
      {isPublisher ? null : (
        <button
          onClick={() => onClickChangeMemberStatus(EnumMemberStatus.publisher)}
        >
          發文者
        </button>
      )}

      <div className="memberContainer">
        <MemberCard />
        {memberStatus == EnumMemberStatus.vistor ? <VistorRight /> : null}
        {memberStatus == EnumMemberStatus.reviewer ? <ReviewerRight /> : null}
        {memberStatus == EnumMemberStatus.publisher ? <ReviewerRight /> : null}
      </div>
    </div>
  );
};

export default MemberPage;
