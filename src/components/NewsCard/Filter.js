import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../public/css/NewsCard.css";
import { ArticleStatus } from "../../modules/article";
const Filter = ({ setSelectedArticleStatus }) => {
  const [bgColor, setBgColor] = useState(["var(--navy-blue)", "", ""]);
  const [ftColor, setFtColor] = useState(["var(--white)", "", ""]);

  const onClickFilter = (articleType) => {
    if (articleType == ArticleStatus.unreview) {
      setSelectedArticleStatus(ArticleStatus.unreview);
      setBgColor(["var(--navy-blue)", "", ""]);
      setFtColor(["var(--white)", "", ""]);
    } else if (articleType == ArticleStatus.underReview) {
      setSelectedArticleStatus(ArticleStatus.underReview);
      setBgColor(["", "var(--navy-blue)", ""]);
      setFtColor(["", "var(--white)", ""]);
    } else {
      setSelectedArticleStatus(ArticleStatus.verified);
      setBgColor(["", "", "var(--navy-blue)"]);
      setFtColor(["", "", "var(--white)"]);
    }
  };
  return (
    <div className="container">
      <div className="filter">
        <a
          href="#"
          onClick={() => onClickFilter(ArticleStatus.unreview)}
          style={{
            backgroundColor: bgColor[0],
            color: ftColor[0],
          }}
        >
          未審核
        </a>
        <a
          href="#"
          onClick={() => onClickFilter(ArticleStatus.underReview)}
          style={{
            backgroundColor: bgColor[1],
            color: ftColor[1],
          }}
        >
          審核中
        </a>
        <a
          href="#"
          onClick={() => onClickFilter(ArticleStatus.verified)}
          style={{
            backgroundColor: bgColor[2],
            color: ftColor[2],
          }}
        >
          已審核
        </a>
      </div>
    </div>
  );
};

export default Filter;
