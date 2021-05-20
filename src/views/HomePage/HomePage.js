import React, { useEffect, useState, useRef, useCallback } from "react";
import Filter from "../../components/NewsCard/Filter";
import useGetNews from "../../hooks/useGetNews";
import { ArticleStatus } from "../../modules/article";
import ArticleList from "../../components/Article/ArticleList";
import LoadingDialog from "../../components/Dialog/LoadingDialog";
const HomePage = () => {
  const [selectedArticleStatus, setSelectedArticleStatus] = useState(
    ArticleStatus.unreview
  );
  const [loadingFlag, setLoadingFlag] = useState(true);
  useEffect(() => {

    return () => {

    }
  }, [])
  return (
    <div className='homePageContainer navBarFixed'>
      <LoadingDialog isOpen={loadingFlag} setIsOpen={setLoadingFlag} />
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
