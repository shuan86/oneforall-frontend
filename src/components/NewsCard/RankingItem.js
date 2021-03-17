import React, { useState, useEffect } from "react";
import "../../public/css/common.css";
import "../../public/css/RankingItem.css";
import inspector from "../../public/images/inspector.jpg";
import { MemberInformation } from "../Member/MemberCard";

const RankingItem = ({
  memberFlag,
  setMemberFlag,
  id,
  memberName,
  exp,
  rank,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen((pre) => {
      if (id != memberFlag.id) return false;
      return pre;
    });
  }, [memberFlag]);
  const onClickSetRankingFlag = () => {
    setMemberFlag((pre) => {
      const data = { flag: !pre.flag, id };
      setIsOpen(data.flag);
      return data;
    });
  };
  return (
    <div className="rankingItem">
      <a href="#" className={"rankingPosition"} onClick={onClickSetRankingFlag}>
        <div className={"rankAccount"}>
          <img src={inspector} alt="rankAccount" width={"20px"} />
          <span>{memberName}</span>
        </div>
        <div className={"rankScore"}>
          <span>{exp}</span>
        </div>
        <div className={"rankSequence"}>
          <span>{rank}</span>
        </div>
      </a>
      <div className={isOpen ? "rankingItemMemberInformation" : "none"}>
        <MemberInformation setMemberFlag={setMemberFlag} />
      </div>
    </div>
  );
};

export default RankingItem;
