import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../../components/NewsCard/Filter";
import "../../public/css/HomePage.css";
import {
  NewsCardUnreviewed,
  NewsCardUnderReview,
  NewsCardReviewed,
  NewsCard,
} from "../../components/NewsCard/NewsCard";
import RankingTable from "../../components/NewsCard/RankingTable";
import ReportDialog from "../../components/Report/ReportDialog";
import * as contract from "../../modules/smartcontract";
import { useInView } from "react-intersection-observer";
import useGetNews from "../../hooks/useGetNews";
import { TestCard } from "../../components/Test/Test";

const HomePage = () => {
  const eveyRequestDataAmount = 2;
  const [pageNaumber, setPageNumber] = useState(1);
  const [contractNewsDatas, setContractNewsData] = useState([]);

  const [reportDialogSwitch, setReportDialogSwitch] = useState(false);
  const [onSelectArticleId, setOnSelectArticleId] = useState(0);
  const { loading, newsDatas, hasMoreData, error } = useGetNews(
    pageNaumber,
    eveyRequestDataAmount
  );
  const observer = useRef();

  useEffect(() => {
    const excuteContract = async () => {
      const newsAmount = await contract.getNewsAmount();
      if (pageNaumber * eveyRequestDataAmount < newsAmount) {
        const contractNewsIdArray = await contract.getRangeNewsId(
          pageNaumber * eveyRequestDataAmount - eveyRequestDataAmount + 1,
          pageNaumber * eveyRequestDataAmount
        );
        console.log("contractNewsIdArray:", contractNewsIdArray);
        let tmpArray = [];
        for (let i = 0; i < contractNewsIdArray.length; i++) {
          if (newsDatas && newsDatas.length > 0) {
            const noDifferentData = newsDatas.every((item) => {
              return item.id != contractNewsIdArray[i];
            });
            console.log("noDifferentData:", noDifferentData);
            if (noDifferentData == false) {
              const result = await contract.getNewsByNewsIdEvent(
                contractNewsIdArray[i]
              );
              console.log("result:", result);
              if (result) tmpArray.push(contractNewsIdArray[i]);
            }
          } else {
            const result = await contract.getNewsByNewsIdEvent(
              contractNewsIdArray[i]
            );
            console.log("result:", result);
          }
        }

        setContractNewsData((pre) => [...pre, ...tmpArray]);
      }
    };
    if (contract.checkContractIsOpen() && loading == false)
      excuteContract(pageNaumber * eveyRequestDataAmount);
  }, [loading]);
  const lastElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreData) {
      }
      setPageNumber((prevPageNumber) =>
        entries[0].isIntersecting && hasMoreData
          ? prevPageNumber + 1
          : prevPageNumber
      );
    });
    if (node) observer.current.observe(node);
  };

  const onClickOpenReportDialogBtn = useCallback((articleId) => {
    setReportDialogSwitch(true);
    setOnSelectArticleId(articleId);
  });
  return (
    <div className="homePageContainer">
      <ReportDialog
        isOpen={reportDialogSwitch}
        setOpen={setReportDialogSwitch}
        onSelectArticleId={onSelectArticleId}
      />
      <Filter />
      <div className="container">
        <div className="homePageContent">
          <div className="NewsCard">
            {/* {contractNewsDatas.map((value, index) => {
              console.log("contractNewsDatas:", value);
              return (
                <NewsCard
                  key={id}
                  articleData={value}
                  onClickReportBtn={onClickOpenReportDialogBtn}
                  refFunc={null}
                />
              );
            })} */}
            {newsDatas.map((value, index) => {
              const { id } = value;
              if (newsDatas.length == index + 1) {
                return (
                  <NewsCard
                    key={id}
                    articleData={value}
                    onClickReportBtn={onClickOpenReportDialogBtn}
                    refFunc={lastElementRef}
                  />
                );
              } else {
                return (
                  <NewsCard
                    key={id}
                    articleData={value}
                    onClickReportBtn={onClickOpenReportDialogBtn}
                    refFunc={null}
                  />
                );
              }
            })}
          </div>
          <div className="Ranking">
            <RankingTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
