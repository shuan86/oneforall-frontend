import React, { useEffect, useState } from "react";
import * as contract from "../../modules/smartcontract";
import RootPublisherDataTable from "../../components/Root/DataTable";
import Button from "@material-ui/core/Button";
import AgreeDisagreePublisherDialog from "../../components/Root/DecisionDialog";
import { RootPublisherDecision } from "../../modules/publisher";
import { getAllData as getAllLocalStorageData } from "../../modules/localstorage";
const PublisherPage = () => {
  const [applyPublisherState, setApplyPublisherState] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const [dialogSwitch, setDialogSwitch] = useState(false);
  const [decisionReason, setDecisionReason] = useState("");

  const publisherList = [];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "account", headerName: "account", width: 330 },
    { field: "companyName", headerName: "companyName", width: 330 },
    { field: "co", headerName: "co", width: 330 },
    { field: "email", headerName: "email", width: 330 },
    { field: "phone", headerName: "phone", width: 330 },
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
    const result = await RootPublisherDecision(
      selectedData.publisherId,
      decision,
      decisionReason
    );
    if ((result.status = 200)) {
    }
    setDialogSwitch(false);
  };

  useEffect(() => {
    const excuteContract = async () => {
      const publisherAddrArray = await contract.getApplyPublishersAddr();
      console.log("publisherAddrArray:", publisherAddrArray);
      if (publisherAddrArray != null) {
        let num = 0;
        for (const addr of publisherAddrArray) {
          const tmp = await contract.getApplyPublisherEvent(addr);
          publisherList.push({ ...tmp, id: num });
          console.log("publisherData:", { ...tmp, id: num });
          num++;
        }
      }
      setApplyPublisherState(publisherList);
    };
    excuteContract(); // <div key={index}>{v.companyName}</div>;
    const handleSubScribeFunc = (mId, isAgree) => {
      setApplyPublisherState((data) => {
        let tmpArray = publisherList;
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
            count++;
          }
          if (removeData != null) {
            if (index > -1) {
              const array = tmpArray.splice(index, 1);
              return array;
            }
          }
        }
        return data;
      });
    };
    contract.subscribeEnrollPublisherEvent(handleSubScribeFunc);
  }, []);

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
