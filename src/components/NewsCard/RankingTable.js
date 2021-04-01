import React, { useState, useEffect } from "react";
import "../../public/css/common.css";
import "../../public/css/RankingTable.css";
import RankingItem from "./RankingItem";
import { getTopMember } from "../../modules/member";
const RankingTable = () => {
  const [rankingDataArray, setRankingDataArray] = useState([
    { id: 0, account: "", exp: 0 },
  ]);
  const [selectedRankingItem, setSelectedRankingItem] = useState({
    isOpenFlag: false,
    memberId: 0,
  });
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await getTopMember();
      if (result) {
      }
      setRankingDataArray((pre) => (result ? result : pre));

      console.log("RankingTable:", result);
    };
    asyncFunc();
    return () => {};
  }, []);
  return (
    <div className={"rankingTable"}>
      <h2>積分榜</h2>
      <div className={"rankingItemListTitle"}>
        <span className={"rankingName"}>名稱</span>
        <span className={"rankingScore"}>分數</span>
        <span className={"rankingSequence"}>排序</span>
      </div>
      {rankingDataArray.map((val, index) => {
        return (
          <RankingItem
            selectedRankingItem={selectedRankingItem}
            setSelectedRankingItem={setSelectedRankingItem}
            memberName={val.account}
            exp={val.exp}
            memberId={val.id}
            rank={index}
            key={index}
          />
        );
      })}

      {/* <RankingItem
        selectedRankingItem={selectedRankingItem}
        setSelectedRankingItem={setSelectedRankingItem}
        memberName={"Cesario"}
        exp={105}
        rank={1}
        memberId={1}
        id={1}
      />
      <RankingItem
        selectedRankingItem={selectedRankingItem}
        setSelectedRankingItem={setSelectedRankingItem}
        memberName={"Albert"}
        exp={102}
        rank={2}
        memberId={1}
        id={2}
      />
      <RankingItem
        selectedRankingItem={selectedRankingItem}
        setSelectedRankingItem={setSelectedRankingItem}
        memberName={"danny"}
        exp={99}
        rank={3}
        memberId={1}
        id={3}
      /> */}
    </div>
  );
};

export default RankingTable;
