import React, { useEffect, useState } from "react";
import * as contract from "../../modules/smartcontract";
import RootPublisherDataTable from "../../components/Publisher/RootPublisherDataTable";
import Button from "@material-ui/core/Button";
const PublisherPage = () => {
  const [applyPublisherData, setApplyPublisherData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const publisherList = [];
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "publisherId", headerName: "publisherId", width: 330 },
    { field: "companyName", headerName: "companyName", width: 330 },
    { field: "co", headerName: "co", width: 330 },
    { field: "email", headerName: "email", width: 330 },
    { field: "phone", headerName: "phone", width: 330 },
  ];
  const onSelected = (sel) => {
    const { data, isSelected } = sel;
    let tmpArray = [...selectedData];
    if (isSelected) {
      tmpArray = [...selectedData, data];
    } else {
      tmpArray = tmpArray.filter((value, index, arr) => {
        if (value != data) return value;
      });
    }
    console.log("onSelected:", tmpArray);
    setSelectedData(tmpArray);
  };
  const onClickSend = () => {};
  useEffect(() => {
    const excuteContract = async () => {
      const publisherAddrArray = await contract.getApplyPublishersAddr();
      let num = 0;
      for (const addr of publisherAddrArray) {
        console.log("addr:", addr);
        const tmp = await contract.getApplyPublisherEvent(addr);
        publisherList.push({ ...tmp, id: num });
        num++;
      }
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
      <div style={{ margin: "left:50%" }}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{ marginLeft: "50%" }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
export default PublisherPage;
