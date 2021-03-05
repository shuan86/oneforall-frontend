import React, { useEffect, useState } from "react";
import * as contract from "../../modules/smartcontract";
import RootPublisherDataTable from "../../components/RootPublisher/RootPublisherDataTable";
import Button from "@material-ui/core/Button";
import AgreeDisagreePublisherDialog from "../../components/RootPublisher/PublisherDecisionDialog";
import { RootPublisherDecision } from "../../modules/member";
import { ILocalStorage } from "../../interfaces/IMember";
const PublisherPage = () => {
  const [applyPublisherData, setApplyPublisherData] = useState([]);
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
      localStorage.getItem(ILocalStorage.getId),
      selectedData.publisherId,
      decision,
      decisionReason
    );
    if ((result.status = 200)) {
    }
    setDialogSwitch(false);
    console.log(decision, decisionReason);
  };

  useEffect(() => {
    const excuteContract = async () => {
      const publisherAddrArray = await contract.getApplyPublishersAddr();
      let num = 0;
      for (const addr of publisherAddrArray) {
        const tmp = await contract.getApplyPublisherEvent(addr);
        publisherList.push({ ...tmp, id: num });
        num++;
      }
      console.log("publisherAddrArray:", publisherAddrArray);
      setApplyPublisherData(publisherList);
    };
    excuteContract(); // <div key={index}>{v.companyName}</div>;
  }, []);

  return (
    <div>
      <RootPublisherDataTable
        columns={columns}
        rows={applyPublisherData}
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
