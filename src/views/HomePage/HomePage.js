import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../../components/NewsCard/Filter";
import useGetNews from "../../hooks/useGetNews";
import { ArticleStatus } from "../../modules/article";
import ArticleList from "../../components/Article/ArticleList";
const HomePage = () => {
  const [selectedArticleType, setSelectedArticleType] = useState(
    ArticleStatus.unreview
  );

  return (
    <div>
      <Filter setSelectedArticleType={setSelectedArticleType} />
      {selectedArticleType == ArticleStatus.unreview && (
        <ArticleList
          articleType={ArticleStatus.unreview}
          selectedArticleType={selectedArticleType}
        />
      )}

      {selectedArticleType == ArticleStatus.underReview && (
        <ArticleList
          articleType={ArticleStatus.underReview}
          selectedArticleType={selectedArticleType}
        />
      )}

      {selectedArticleType == ArticleStatus.verifiedFail && (
        <ArticleList
          articleType={ArticleStatus.verifiedFail}
          selectedArticleType={selectedArticleType}
        />
      )}
    </div>
  );
};

export default HomePage;
