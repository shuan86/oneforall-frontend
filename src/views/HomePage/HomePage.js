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
const NewsCard = ({ newsStatus }) => {
  <div className="NewsCard">
    <NewsCardUnreviewed />
    <NewsCardUnderReview />
    <NewsCardReviewed />
  </div>;
};

const HomePage = () => {
  let newsDataArray = [];
  let newsImgArray = [];

  const [newsDataList, setNewsDataList] = useState([]);
  const [newsImgList, setNewsImgList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [scrollCount, setScrollCount] = useState(1);
  
  const [scrollDownFlag, setScrollDownFlag] = useState(false);

  useEffect(() => {
    // const contractFunc = async () => {
    //   await contract.getAllNewsId();
    //   const amount = await contract.getNewsAmount();
    //   const allNewsDataArray = await contract.getNewsCompleteData(2, 2 + 1);
    //   console.log(allNewsDataArray);
    //   // setNewsDataList(allNewsDataArray);
    //   setNewsDataList(oldNewsDataList => [...oldNewsDataList, ...allNewsDataArray]);
    // };

    // contractFunc();
    return () => {};
  }, []);
  useEffect(() => {

      const contractFunc = async () => {
      await contract.getAllNewsId();
      const amount = await contract.getNewsAmount();
      const allNewsDataArray = await contract.getNewsCompleteData(scrollCount, scrollCount + 1);
      console.log(allNewsDataArray);
      if(observer.current) observer.current.disconnect()
      // setNewsDataList(allNewsDataArray);
     setNewsDataList(oldNewsDataList => [...oldNewsDataList, ...allNewsDataArray]);
     // setScrollCount(scrollCount =>scrollCount+1)
     // setScrollDownFlag(false)
    };

    contractFunc();
   
    return () => {};
  }, [scrollCount]);
  const observer = useRef()
  
  const lastNewsCard = (node) => {
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      console.log('IntersectionObserver');
      let flag = false
      let num=0
      if(entries[0].isIntersecting){
          console.log('Visble');
          //  flag = true
          //  num=1
      }
     // setScrollDownFlag(flag)
      setScrollCount(s=>s+num)
    })
    if(node) observer.current.observe(node);
    console.log('observer.current:'+observer.current);
    console.log(node);
  }



  return (
    <div>
      <Filter />
      <div className="container">
        <div className="homePageContent">
          <div className="NewsCard">
            {/* <div ref={lastNewsCard}>ref-test</div> */}
            {newsDataList.map((value, index) => {
              let ifintiyScroll = null
              if(newsDataList.length === index + 1){
                ifintiyScroll = lastNewsCard
              }//判斷是否為最後一個Card

              if (value.newsType == NewsType.Unreview){
                return <NewsCardUnreviewed  key={index} articleData={value} ifintiyScroll={ifintiyScroll} />;}
              else if (value.newsType == NewsType.UnderReviewed){
                return <NewsCardUnderReview  key={index} articleData={value} ifintiyScroll={ifintiyScroll} />;}
              else if (value.newsType == NewsType.Reviewed) {
                return <NewsCardReviewed key={index} articleData={value} ifintiyScroll={ifintiyScroll} />;
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
