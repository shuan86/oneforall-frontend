import React, { useEffect, useState } from "react";
import * as contract from "../../modules/smartcontract";
import DataTable from "../../components/Root/DataTable";
import DecisionDialog from "../../components/Root/DecisionDialog";
import { RootReviewerDecision } from "../../modules/reviewer";
import {
  checkArrayHasMemberId,
  findIndexByMemberId,
} from "../../modules/arrayCheck";
import { getApplyReviewers } from "../../modules/reviewer";

const ReviewerPage = () => {
  const [applyReviewerState, setApplyReviewerState] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const [dialogSwitch, setDialogSwitch] = useState(false);
  const [decisionReason, setDecisionReason] = useState("");
  const [isDbDataLoadedFlag, setDbDataLoadedFlag] = useState(false);

  const reviewerList = [];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "account", headerName: "account", width: 330 },
    { field: "email", headerName: "email", width: 330 },
    { field: "tag", headerName: "tag", width: 330 },
    { field: "applyContent", headerName: "applyContent", width: 330 },
  ];
  let num = 0;
  const onSelected = (sel) => {
    const { data, isSelected } = sel;
    setDialogSwitch(true);
    setSelectedData(data);
  };
  const onReasonChange = (event) => {
    setDecisionReason(event.target.value);
  };
  const onClickFinalDecision = async (decision) => {
    const result = await RootReviewerDecision(
      selectedData.reviewerId,
      decision,
      decisionReason
    );

    setApplyReviewerState((pre) =>
      result ? pre.filter((item) => item.memberId !== result.memberId) : pre
    );
    setDialogSwitch(false);
  };

  useEffect(() => {
    const loadData = async () => {
      const dbReviewerArrayData = await getApplyReviewers();

      if (dbReviewerArrayData != null) {
        for (let i = 0; i < dbReviewerArrayData.length; i++) {
          const tmp = dbReviewerArrayData[i];
          const isExist = checkArrayHasMemberId(
            applyReviewerState,
            tmp.memberId
          );
          if (isExist == false) {
            reviewerList.push({ ...tmp, id: num });
            num++;
          }
        }
      }
      setApplyReviewerState((pre) => {
        setDbDataLoadedFlag(true);
        return reviewerList;
      });
    };
    loadData();
    console.log("load");
    const handleSubScribeFunc = (memberId, isAgree) => {
      setApplyReviewerState((pre) =>
        pre.filter((item) => item.memberId !== memberId)
      );
    };
    contract.subscribeEnrollReviewerEvent(handleSubScribeFunc);
  }, []);
  useEffect(() => {
    const excuteContract = async () => {
      const reviewerAddrArray = await contract.getApplyReviewersAddr();
      console.log("reviewerAddrArray:", reviewerAddrArray);

      if (reviewerAddrArray != null) {
        for (const addr of reviewerAddrArray) {
          const tmp = await contract.getApplyReviewerEvent(addr);
          const notSame = applyReviewerState.every(
            (item) => item.memberId != tmp.memberId
          );
          if (notSame) {
            reviewerList.push({ ...tmp, id: num });
            console.log("reviewer contract data:", { ...tmp, id: num });
            num++;
          }
        }
      }
      setApplyReviewerState((pre) => [...pre, ...reviewerList]);
    };
    if (isDbDataLoadedFlag) excuteContract();
  }, [isDbDataLoadedFlag]);
  return (
    <div>
      <DataTable
        columns={columns}
        rows={applyReviewerState}
        onSelected={onSelected}
      />
      <DecisionDialog
        isOpen={dialogSwitch}
        setOpen={setDialogSwitch}
        onReasonChange={onReasonChange}
        onClickFinalDecision={onClickFinalDecision}
      />
    </div>
  );
};
export default ReviewerPage;
