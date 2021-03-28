import React, { useEffect, useState } from "react";
import * as contract from "../../modules/smartcontract";
import * as publisher from "../../modules/publisher";
import RootPublisherDataTable from "../../components/Root/DataTable";
import Button from "@material-ui/core/Button";
import AgreeDisagreePublisherDialog from "../../components/Root/DecisionDialog";
import { RootPublisherDecision } from "../../modules/publisher";
import { getAllData as getAllLocalStorageData } from "../../modules/localstorage";
import { checkArrayHasMemberId } from "../../modules/arrayCheck";
const PublisherPage = () => {
  const [applyPublisherState, setApplyPublisherState] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const [dialogSwitch, setDialogSwitch] = useState(false);
  const [decisionReason, setDecisionReason] = useState("");
  const [isDbDataLoadedFlag, setDbDataLoadedFlag] = useState(false);
  const publisherList = [];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "account", headerName: "account", width: 330 },
    { field: "companyName", headerName: "companyName", width: 330 },
    { field: "co", headerName: "co", width: 330 },
    { field: "email", headerName: "email", width: 330 },
    { field: "phone", headerName: "phone", width: 330 },
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
    const result = await RootPublisherDecision(
      selectedData.publisherId,
      decision,
      decisionReason
    );
    setApplyPublisherState((pre) =>
      result ? pre.filter((item) => item.memberId !== result.memberId) : pre
    );
    setDialogSwitch(false);
  };

  useEffect(() => {
    const loadData = async () => {
      const dbPublisherArrayData = await publisher.getApplyPublishers();

      if (dbPublisherArrayData != null) {
        for (let i = 0; i < dbPublisherArrayData.length; i++) {
          const tmp = dbPublisherArrayData[i];
          const isExist = checkArrayHasMemberId(
            applyPublisherState,
            tmp.memberId
          );
          if (isExist == false) {
            publisherList.push({ ...tmp, id: num });
            num++;
          }
        }
      }
      setApplyPublisherState((pre) => {
        setDbDataLoadedFlag(true);
        return publisherList;
      });
    };
    loadData();

    const handleSubScribeFunc = (memberId, isAgree) => {
      setApplyPublisherState((pre) =>
        pre.filter((item) => item.memberId !== memberId)
      );
    };

    contract.checkContractIsOpen() &&
      contract.subscribeEnrollPublisherEvent(handleSubScribeFunc);
  }, []);
  useEffect(() => {
    const excuteContract = async () => {
      const contractPublisherAddrArray = await contract.getApplyPublishersAddr();
      console.log("publisherAddrArray:", contractPublisherAddrArray);
      if (contractPublisherAddrArray != null) {
        for (const addr of contractPublisherAddrArray) {
          const tmp = await contract.getApplyPublisherEvent(addr);
          const notSame = applyPublisherState.every(
            (item) => item.memberId != tmp.memberId
          );
          if (notSame) {
            publisherList.push({ ...tmp, id: num });
            console.log("publisherList contract data:", { ...tmp, id: num });
            num++;
          }
        }
      }
      setApplyPublisherState((pre) => [...pre, ...publisherList]);
    };
    if (isDbDataLoadedFlag && contract.checkContractIsOpen()) excuteContract();
  }, [isDbDataLoadedFlag]);
  return (
    <div>
      <RootPublisherDataTable
        columns={columns}
        rows={applyPublisherState}
        onSelected={onSelected}
      />
      <AgreeDisagreePublisherDialog
        isOpen={dialogSwitch}
        setOpen={setDialogSwitch}
        onReasonChange={onReasonChange}
        onClickFinalDecision={onClickFinalDecision}
      />
    </div>
  );
};
export default PublisherPage;
