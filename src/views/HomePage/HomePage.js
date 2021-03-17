import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../../components/NewsCard/Filter";
import "../../public/css/HomePage.css";
import {
  NewsCardUnreviewed,
  NewsCardUnderReview,
  NewsCardReviewed,
} from "../../components/NewsCard/NewsCard";
import RankingTable from "../../components/NewsCard/RankingTable";
import ReportDialog from "../../components/Report/ReportDialog";
import * as contract from "../../modules/smartcontract";
import { NewsType } from "../../interfaces/IContract";
import { useInView } from "react-intersection-observer";
import useGetNews from "../../hooks/useGetNews";
// const NewsCard = ({ newsStatus }) => {
//   <div className="NewsCard">
//     <NewsCardUnreviewed />
//     <NewsCardUnderReview />
//     <NewsCardReviewed />
//   </div>;
// };

const HomePage = () => {
  const [newsDataList, setNewsDataList] = useState([]);
  const [pageNaumber, setPageNumber] = useState(1);

  /*----------------------------*/
  const [reportDialogSwitch, setReportDialogSwitch] = useState(false);
  const [onSelectArticleId, setOnSelectArticleId] = useState(0);
  const { loading, newsDatas, hasMoreData, error } = useGetNews(pageNaumber);
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      console.log("loading:", loading);
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
    },
    [loading, hasMoreData]
  );
  const onClickOpenReportDialogBtn = (articleId) => {
    setReportDialogSwitch(true);
    setOnSelectArticleId(articleId);
  };
  const NewsCard = ({ articleData, onClickReportBtn }) => {
    let tmpNewsCard = (
      <NewsCardUnreviewed
        articleData={articleData}
        onClickReportBtn={onClickReportBtn}
      />
    );
    if (articleData.newsType == NewsType.Unreview) {
      <NewsCardUnreviewed
        articleData={articleData}
        onClickReportBtn={onClickReportBtn}
      />;
    } else if (articleData.newsType == NewsType.UnderReviewed) {
      <NewsCardUnderReview
        articleData={articleData}
        onClickReportBtn={onClickReportBtn}
      />;
    } else if (articleData.newsType == NewsType.Reviewed) {
      <NewsCardReviewed
        articleData={value}
        onClickReportBtn={onClickOpenReportDialogBtn}
      />;
    }
    return tmpNewsCard;
  };
  // useEffect(() => {
  //   console.log("newsDatas:", newsDatas);
  //   newsDatas.map((value, index) => {});
  // }, [newsDatas]);
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
            {newsDatas.map((value, index) => {
              // console.log("value.id:", value.id);
              if (newsDatas.length == index + 1) {
                return (
                  <div ref={lastElementRef} key={value.id}>
                    <NewsCard
                      articleData={value}
                      onClickReportBtn={onClickOpenReportDialogBtn}
                    />
                  </div>
                  // <div key={value.id}>
                  //   <NewsCard
                  //     articleData={value}
                  //     onClickReportBtn={onClickOpenReportDialogBtn}
                  //   />
                  // </div>
                );
              } else {
                return (
                  <div key={value.id}>
                    <NewsCard
                      articleData={value}
                      onClickReportBtn={onClickOpenReportDialogBtn}
                    />
                  </div>
                );
              }
            })}
            {/* <div ref={lastElementRef}>123</div> */}
            <div>{loading && "Loading..."}</div>
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
