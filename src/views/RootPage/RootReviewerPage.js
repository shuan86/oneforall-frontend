import React, { useEffect, useState } from "react";
import * as contract from "../../modules/smartcontract";
import DataTable from "../../components/Root/DataTable";
import DecisionDialog from "../../components/Root/DecisionDialog";
import { RootReviewerDecision } from "../../modules/reviewer";
const ReviewerPage = () => {
  const [applyReviewerState, setApplyReviewerState] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const [dialogSwitch, setDialogSwitch] = useState(false);
  const [decisionReason, setDecisionReason] = useState("");

  const reviewerList = [];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "account", headerName: "account", width: 330 },
    { field: "email", headerName: "email", width: 330 },
    { field: "tag", headerName: "tag", width: 330 },
    { field: "applyContent", headerName: "applyContent", width: 330 },
  ];
  const onSelected = (sel) => {
    const { data, isSelected } = sel;
    setDialogSwitch(true);
    console.log("onSelected:", data);
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
    if ((result.status = 200)) {
    }
    setDialogSwitch(false);
  };

  useEffect(() => {
    const excuteContract = async () => {
      const reviewerAddrArray = await contract.getApplyReviewersAddr();
      console.log("reviewerAddrArray:", reviewerAddrArray);
      if (reviewerAddrArray != null) {
        let num = 0;
        for (const addr of reviewerAddrArray) {
          const tmp = await contract.getApplyReviewerEvent(addr);
          reviewerList.push({ ...tmp, id: num });
          console.log("reviewer data:", { ...tmp, id: num });
          num++;
        }

        /*--------------------------------*/
      }
      setApplyReviewerState(reviewerList);
    };
    excuteContract(); // <div key={index}>{v.companyName}</div>;
    const handleSubScribeFunc = (mId, isAgree) => {
      setApplyReviewerState((data) => {
        let tmpArray = reviewerList;
        let returnArray = [];
        let index = -1;
        if (isAgree) {
          let removeData = null;
          let count = 0;

          for (const d of tmpArray) {
            const { memberId } = d;
            if (mId != memberId) {
              removeData = d;
              index = count;
            }
            //  returnArray.push();
            count++;
          }

          if (removeData != null) {
            // tmpArray = applyReviewerData;
            if (index > -1) {
              const array = tmpArray.splice(index, 1);
              return array;
            }
          }
        }
        return data;
      });
    };
    contract.subscribeEnrollReviewerEvent(handleSubScribeFunc);
  }, []);
  useEffect(() => {
    console.log(
      "applyReviewerData changexxxxxxxxxxxxxxxxxxxxxxxxx: ",
      applyReviewerState
    );
    return () => {};
  }, [applyReviewerState]);
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
