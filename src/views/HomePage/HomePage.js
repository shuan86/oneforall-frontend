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
  let arrLists = ["打文章", "寫程式", "耍廢"];
  const [articleContent, setArticleContent] = useState("123");
  useEffect(() => {
    const contractFunc = async () => {
      for (let i = 1; i < 4; i++) {
        newsData.push(await getNewsContractByNewsId(i));
        setArticleContent(i);
        console.log("newsData:", i);
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
            {list.map((_, index) => (
              <NewsCardUnreviewed key={index} articleContent={articleContent} />
            ))}
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
