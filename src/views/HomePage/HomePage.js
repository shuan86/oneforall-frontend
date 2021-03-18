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
// const NewsCard = ({ newsStatus }) => {
//   <div className="NewsCard">
//     <NewsCardUnreviewed />
//     <NewsCardUnderReview />
//     <NewsCardReviewed />
//   </div>;
// };

const HomePage = () => {
  const [pageNaumber, setPageNumber] = useState(1);

  const [reportDialogSwitch, setReportDialogSwitch] = useState(false);
  const [onSelectArticleId, setOnSelectArticleId] = useState(0);
  const { loading, newsDatas, hasMoreData, error } = useGetNews(pageNaumber);
  const observer = useRef();

  // const lastElementRef = useCallback(
  //   (node) => {
  //     console.log("lastElementRef loading:", loading);
  //     console.log("lastElementRef node:", node.current);

  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMoreData) {
  //       }
  //       setPageNumber((prevPageNumber) =>
  //         entries[0].isIntersecting && hasMoreData
  //           ? prevPageNumber + 1
  //           : prevPageNumber
  //       );
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMoreData]
  // );
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
