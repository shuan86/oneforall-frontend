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
import { getNews, createReportedNews } from "../../modules/article";

// const NewsCard = ({ newsStatus }) => {
//   <div className="NewsCard">
//     <NewsCardUnreviewed />
//     <NewsCardUnderReview />
//     <NewsCardReviewed />
//   </div>;
// };

const HomePage = () => {
  const [newsDataList, setNewsDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollCount, setScrollCount] = useState(1);
  const [scrollFirstDownFlag, setScrollFirstDownFlag] = useState(false);
  const ref = useRef();
  const [inViewRef, inView] = useInView();
  const [isLastCard, setIsLastCard] = useState(false);
  /*----------------------------*/
  const [reportDialogSwitch, setReportDialogSwitch] = useState(false)
  const [onSelectArticleId, setOnSelectArticleId] = useState(0)


  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 1,
  // });

  // const contractFunc = async () => {
  //   await contract.getAllNewsId();
  //   const index = scrollCount;
  //   const allNewsDataArray = await contract.getNewsCompleteData(
  //     index,
  //     index + 1
  //   );
  //   console.log(allNewsDataArray);
  //   // setNewsDataList(allNewsDataArray);
  //   setNewsDataList((oldNewsDataList) => [
  //     ...oldNewsDataList,
  //     ...allNewsDataArray,
  //   ]);
  // };
  // const setRefs = useCallback(
  //   (node) => {
  //     // Ref's from useRef needs to have the node assigned to `current`
  //     ref.current = node;
  //     // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
  //     inViewRef(node);
  //   },
  //   [inViewRef]
  // );
  // useEffect(() => {
  //   setScrollCount((s) => {
  //     if (inView == true && ref.current) {
  //       return s + 1;
  //     } else {
  //       return s;
  //     }
  //   });
  //   return () => {};
  // }, [inView]);
  // useEffect(() => {
  //   contractFunc();
  //   return () => {};
  // }, [scrollCount]);
  //const observer = useRef();
  useEffect(() => {
    const loadData = async () => {
      const result = await getNews(0, 5);
      console.log("home page:", result);
      setNewsDataList(result ? result : null);
    };
    loadData();
    return () => { };
  }, []);
  const onClickOpenReportDialogBtn = (articleId) => {
    setReportDialogSwitch(true)
    setOnSelectArticleId(articleId)
  }
  // const onClickSendReport = async () => {

  //   const result = await createReport(onSelectArticleId, 'evidenceState')
  //   if (result) {

  //   }
  //   console.log('result:', result);
  // }
  return (
    <div className="homePageContainer">
      <ReportDialog isOpen={reportDialogSwitch} setOpen={setReportDialogSwitch} onSelectArticleId={onSelectArticleId} />
      <Filter />
      <div className="container">
        <div className="homePageContent">
          <div className="NewsCard">
            {newsDataList.map((value, index) => {
              const isLastCardStatus =
                newsDataList.length == index + 1 ? true : false;

              if (value.newsType == NewsType.Unreview) {
                return (
                  <NewsCardUnreviewed
                    key={index}
                    articleData={value}
                    onClickReportBtn={onClickOpenReportDialogBtn}
                  // refHook={isLastCardStatus ? setRefs : null}
                  />
                );
              } else if (value.newsType == NewsType.UnderReviewed) {
                return (
                  <NewsCardUnderReview
                    key={index}
                    articleData={value}
                    onClickReportBtn={onClickOpenReportDialogBtn}
                  // refHook={isLastCardStatus ? setRefs : null}
                  />
                );
              } else if (value.newsType == NewsType.Reviewed) {
                return (
                  <NewsCardReviewed
                    key={index}
                    articleData={value}
                  // refHook={isLastCardStatus ? setRefs : null}
                  />
                );
              }
            })}
            {/* {newsDataList.map((value, index) => {
              const isLastCardStatus =
                newsDataList.length == index + 1 ? true : false;

              if (value.newsType == NewsType.Unreview) {
                return (
                  <NewsCardUnreviewed
                    key={index}
                    articleData={value}
                    refHook={isLastCardStatus ? setRefs : null}
                  />
                );
              } else if (value.newsType == NewsType.UnderReviewed) {
                return (
                  <NewsCardUnderReview
                    key={index}
                    articleData={value}
                    refHook={isLastCardStatus ? setRefs : null}
                  />
                );
              } else if (value.newsType == NewsType.Reviewed) {
                return (
                  <NewsCardReviewed
                    key={index}
                    articleData={value}
                    refHook={isLastCardStatus ? setRefs : null}
                  />
                );
              }
            })} */}
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
