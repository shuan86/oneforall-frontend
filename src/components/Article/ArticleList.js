import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../NewsCard/Filter";
import "../../public/css/HomePage.css";
import "../../public/css/NewsCard.css";
import {
  NewsCardUnreviewed,
  NewsCardUnderReview,
  NewsCardReviewed,
  NewsCard,
} from "../NewsCard/NewsCard";
import RankingTable from "../NewsCard/RankingTable";
import ReportDialog from "../Report/ReportDialog";
import * as contract from "../../modules/smartcontract";
import useGetNews from "../../hooks/useGetNews";
import { ArticleType } from "../../modules/article";
const ArticleList = ({ articleType, selectedArticleType }) => {
  const eveyRequestDataAmount = 2;
  const [pageNaumber, setPageNumber] = useState(1);
  const [contractNewsDatas, setContractNewsData] = useState([]);
  const [reportDialogSwitch, setReportDialogSwitch] = useState(false);
  const [selectArticleId, setSelectArticleId] = useState(-1);
  const { loading, newsDatas, hasMoreData, error } = useGetNews(
    pageNaumber,
    eveyRequestDataAmount,
    selectedArticleType
  );

  useEffect(() => {
    return () => {};
  }, []);

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
    setSelectArticleId(articleId);
  });
  return (
    <div className="homePageContainer">
      <ReportDialog
        isOpen={reportDialogSwitch}
        setOpen={setReportDialogSwitch}
        onSelectArticleId={selectArticleId}
      />

      <div className="container">
        <div className="homePageContent">
          <div className="NewsCard">
            {/* {console.log("memberLikeArray:", memberLikeArray)} */}
            {newsDatas.map((value, index) => {
              const { id } = value;
              // console.log("index:", index);

              if (newsDatas.length == index + 1) {
                return (
                  <NewsCard
                    key={id}
                    articleData={value}
                    onClickReportBtn={onClickOpenReportDialogBtn}
                    refFunc={lastElementRef}
                    selectArticleId={selectArticleId}
                    setSelectArticleId={setSelectArticleId}
                  />
                );
              } else {
                return (
                  <NewsCard
                    key={id}
                    articleData={value}
                    onClickReportBtn={onClickOpenReportDialogBtn}
                    refFunc={null}
                    selectArticleId={selectArticleId}
                    setSelectArticleId={setSelectArticleId}
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

export default ArticleList;
