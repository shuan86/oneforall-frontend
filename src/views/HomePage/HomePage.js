import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../../components/NewsCard/Filter";
import useGetNews from "../../hooks/useGetNews";
import { ArticleStatus } from "../../modules/article";
import ArticleList from "../../components/Article/ArticleList";
const HomePage = () => {
  const [selectedArticleStatus, setSelectedArticleStatus] = useState(
    ArticleStatus.unreview
  );

  return (
    <div>
      <Filter setSelectedArticleStatus={setSelectedArticleStatus} />
      {selectedArticleStatus == ArticleStatus.unreview && (
        <ArticleList
          articleStatus={ArticleStatus.unreview}
          selectedArticleStatus={selectedArticleStatus}
        />
      )}

      {selectedArticleStatus == ArticleStatus.underReview && (
        <ArticleList
          articleStatus={ArticleStatus.underReview}
          selectedArticleStatus={selectedArticleStatus}
        />
      )}

      {selectedArticleStatus == ArticleStatus.verified && (
        <ArticleList
          articleStatus={ArticleStatus.verified}
          selectedArticleStatus={selectedArticleStatus}
        />
      )}
    </div>
  );
};

export default HomePage;
