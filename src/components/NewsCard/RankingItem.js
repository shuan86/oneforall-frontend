import React, { useState, useEffect } from "react";
import "../../public/css/common.css";
import "../../public/css/RankingItem.css";
import inspector from "../../public/images/inspector.jpg";
import { MemberInformation } from "../Member/MemberCard";
import { expMappingBadge } from "../../modules/member";
import Copper10 from "../../public/images/medals/copper30.png";

const RankingItem = ({
  selectedRankingItem,
  setSelectedRankingItem,

  memberName,
  exp,
  rank,
  memberId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen((pre) => {
      if (memberId != selectedRankingItem.memberId) return false;
      return pre;
    });
  }, [selectedRankingItem]);
  const onClickSetRankingFlag = () => {
    setIsOpen((pre) => !pre);
    setSelectedRankingItem((pre) => ({ ...pre, memberId }));
  };
  return (
    <div className="rankingItem">
      <a href="#" className={"rankingPosition"} onClick={onClickSetRankingFlag}>
        <div className={"rankAccount"}>
          <span>{memberName}</span>
          <img src={expMappingBadge(exp)} alt="medals" className="medals" />
        </div>
        <div className={"rankScore"}>
          <span>{exp}</span>
        </div>
        <div className={"rankSequence"}>
          <span>{rank}</span>
        </div>
      </a>
      <div className={isOpen ? "rankingItemMemberInformation" : "none"}>
        <MemberInformation memberId={memberId} memberInfoFlag={isOpen} />
      </div>
    </div>
  );
};

export default RankingItem;
