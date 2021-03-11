import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../../components/NewsCard/Filter";
import "../../public/css/HomePage.css";
import {
  NewsCardUnreviewed,
  NewsCardUnderReview,
  NewsCardReviewed,
} from "../../components/NewsCard/NewsCard";
import RankingTable from "../../components/NewsCard/RankingTable";
import * as contract from "../../modules/smartcontract";
import { NewsType } from "../../interfaces/IContract";
import { useInView } from "react-intersection-observer";
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
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 1,
  // });

  const contractFunc = async () => {
    await contract.getAllNewsId();
    const index = scrollCount;
    const allNewsDataArray = await contract.getNewsCompleteData(
      index,
      index + 1
    );
    console.log(allNewsDataArray);
    // setNewsDataList(allNewsDataArray);
    setNewsDataList((oldNewsDataList) => [
      ...oldNewsDataList,
      ...allNewsDataArray,
    ]);
  };
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );
  useEffect(() => {
    setScrollCount((s) => {
      if (inView == true && ref.current) {
        return s + 1;
      } else {
        return s;
      }
    });
    return () => {};
  }, [inView]);
  useEffect(() => {
    contractFunc();
    return () => {};
  }, [scrollCount]);
  //const observer = useRef();

  return (
    <div>
      <Filter />
      <div className="container">
        <div className="homePageContent">
          <div className="NewsCard">
            {/* <div ref={lastNewsCard}>ref-test</div> */}

            {newsDataList.map((value, index) => {
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
