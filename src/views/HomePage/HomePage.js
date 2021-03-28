import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../../components/NewsCard/Filter";
import useGetNews from "../../hooks/useGetNews";
import { ArticleType } from "../../modules/article";
import ArticleList from "../../components/Article/ArticleList";
const HomePage = () => {
  const [selectedArticleType, setSelectedArticleType] = useState(
    ArticleType.Unreview
  );

  return (
    <div>
      <Filter setSelectedArticleType={setSelectedArticleType} />
      {selectedArticleType == ArticleType.Unreview && (
        <ArticleList
          articleType={ArticleType.Unreview}
          selectedArticleType={selectedArticleType}
        />
      )}

      {selectedArticleType == ArticleType.UnderReviewed && (
        <ArticleList
          articleType={ArticleType.UnderReviewed}
          selectedArticleType={selectedArticleType}
        />
      )}

      {selectedArticleType == ArticleType.Reviewed && (
        <ArticleList
          articleType={ArticleType.Reviewed}
          selectedArticleType={selectedArticleType}
        />
      )}
    </div>
  );
};

export default HomePage;
