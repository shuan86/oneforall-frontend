import React, { useEffect, useState } from "react";
import * as contract from "../../modules/smartcontract";
import * as article from "../../modules/article";
import RootDataTable from "../../components/Root/DataTable";
import AgreeDisagreeDialog from "../../components/Article/ArticleReportDialog";
import { checkArrayHasMemberId } from "../../modules/arrayCheck";
const ReviewerPage = () => {
  const [reportNewsState, setReportNewsState] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const [dialogSwitch, setDialogSwitch] = useState(false);
  const [decisionReason, setDecisionReason] = useState("");
  const [isDbDataLoadedFlag, setDbDataLoadedFlag] = useState(false);
  const articleList = [];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "articleId", headerName: "articleId", width: 330 },
    { field: "title", headerName: "title", width: 330 },
    { field: "authorName", headerName: "authorName", width: 330 },
    { field: "evidence", headerName: "evidence", width: 330 },
  ];
  let num = 0;
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
    const result = await article.updateReportedNewsStatus(
      selectedData.memberId,
      selectedData.articleId,
      decision,
      decisionReason
    );
    console.log("onClickFinalDecision:", result);
    setReportNewsState((pre) =>
      result ? pre.filter((item) => item.articleId !== result.articleId) : pre
    );
    setDialogSwitch(false);
  };

  useEffect(() => {
    const loadData = async () => {
      const dbReportNewsArrayData = await article.getAllApplyReportedNews();
      console.log("dbReviewerArrayData:", dbReportNewsArrayData);
      if (dbReportNewsArrayData != null) {
        for (let i = 0; i < dbReportNewsArrayData.length; i++) {
          const tmp = dbReportNewsArrayData[i];
          const isExist = checkArrayHasMemberId(reportNewsState, tmp.articleId);
          if (isExist == false) {
            articleList.push({ ...tmp, id: num });
            num++;
          }
        }
      }
      setReportNewsState((pre) => {
        setDbDataLoadedFlag(true);
        return articleList;
      });
    };
    loadData();

    // const handleSubScribeFunc = (memberId, isAgree) => {
    //   setApplyPublisherState((pre) =>
    //     pre.filter((item) => item.memberId !== memberId)
    //   );
    // };
    // contract.subscribeEnrollPublisherEvent(handleSubScribeFunc);
  }, []);
  // useEffect(() => {
  //   const excuteContract = async () => {
  //     const contractPublisherAddrArray = await contract.getApplyPublishersAddr();
  //     console.log("publisherAddrArray:", contractPublisherAddrArray);
  //     if (contractPublisherAddrArray != null) {
  //       for (const addr of contractPublisherAddrArray) {
  //         const tmp = await contract.getApplyPublisherEvent(addr);
  //         const notSame = applyPublisherState.every(
  //           (item) => item.memberId != tmp.memberId
  //         );
  //         if (notSame) {
  //           publisherList.push({ ...tmp, id: num });
  //           console.log("publisherList contract data:", { ...tmp, id: num });
  //           num++;
  //         }
  //       }
  //     }
  //     setApplyPublisherState((pre) => [...pre, ...publisherList]);
  //   };
  //   if (isDbDataLoadedFlag) excuteContract();
  // }, [isDbDataLoadedFlag]);
  return (
    <div>
      <RootDataTable
        columns={columns}
        rows={reportNewsState}
        onSelected={onSelected}
      />
      <AgreeDisagreeDialog
        isOpen={dialogSwitch}
        setOpen={setDialogSwitch}
        onReasonChange={onReasonChange}
        onClickFinalDecision={onClickFinalDecision}
        selectedData={selectedData}
      />
    </div>
  );
};
export default ReviewerPage;
