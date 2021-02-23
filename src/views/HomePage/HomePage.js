import React, { useEffect, useState } from "react";
import Filter from "../../components/NewsCard/Filter";
import "../../public/css/HomePage.css";
import {
  NewsCardUnreviewed,
  NewsCardUnderReview,
  NewsCardReviewed,
} from "../../components/NewsCard/NewsCard";
import RankingTable from "../../components/NewsCard/RankingTable";
import { getNewsContractByNewsId } from "../../modules/smartcontract";
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
      for (let i = 3; i > 0; i--) {
        newsData.push(await getNewsContractByNewsId(i));

        console.log("newsData123:", i);
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
            {list.map((v, index) => {
              if (v.newsType == 0)
                return <NewsCardUnreviewed key={index} data={v} />;
              else if (v.newsType == 1)
                return <NewsCardUnderReview key={index} data={v} />;
              else if (v.newsType == 2) {
                return <NewsCardReviewed key={index} data={v} />;
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
