import React, { useEffect, useState } from "react";
import Filter from "../../components/NewsCard/Filter";
import "../../public/css/HomePage.css";
import {
  NewsCardUnreviewed,
  NewsCardUnderReview,
  NewsCardReviewed,
} from "../../components/NewsCard/NewsCard";
import RankingTable from "../../components/NewsCard/RankingTable";
import { getNewsFromContractByNewsId } from "../../modules/smartcontract";
import { NewsType } from "../../interfaces/IContract";
const NewsCard = ({ newsStatus }) => {
  <div className="NewsCard">
    <NewsCardUnreviewed />
    <NewsCardUnderReview />
    <NewsCardReviewed />
  </div>;
};

const HomePage = () => {
  let newsData = [];
  const [list, setList] = useState([]);
  useEffect(() => {
    const contractFunc = async () => {
      for (let i = 3; i >= 0; i--) {
        newsData.push(await getNewsFromContractByNewsId(i));

        console.log("newsData123:", newsData[i]);
      }
      setList(newsData);
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
            {list.map((value, index) => {
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
