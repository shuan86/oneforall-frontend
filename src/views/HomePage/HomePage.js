import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const contractFunc = async () => {
      await contract.getAllNewsId();
      const amount = await contract.getNewsAmount();
      const allNewsDataArray = await contract.getNewsCompleteData(1, 4);
      setNewsDataList(allNewsDataArray);
    };

    contractFunc();
    return () => {};
  }, []);

  return (
    <div>
      <Filter />
      <div className="container">
        <div className="homePageContent">
          <div className="NewsCard">
            {newsDataList.map((value, index) => {
              if (value.newsType == NewsType.Unreview)
                return <NewsCardUnreviewed key={index} articleData={value} />;
              else if (value.newsType == NewsType.UnderReviewed)
                return <NewsCardUnderReview key={index} articleData={value} />;
              else if (value.newsType == NewsType.Reviewed) {
                return <NewsCardReviewed key={index} articleData={value} />;
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
