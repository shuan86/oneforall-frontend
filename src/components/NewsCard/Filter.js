import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../public/css/NewsCard.css";
import { ArticleType } from "../../modules/article";
const Filter = ({ setSelectedArticleType }) => {
  const [bgColor, setBgColor] = useState(["var(--navy-blue)", "", ""]);
  const [ftColor, setFtColor] = useState(["var(--white)", "", ""]);

  const onClickFilter = (articleType) => {
    if (articleType == ArticleType.Unreview) {
      setSelectedArticleType(ArticleType.Unreview);
      setBgColor(["var(--navy-blue)", "", ""]);
      setFtColor(["var(--white)", "", ""]);
    } else if (articleType == ArticleType.UnderReviewed) {
      setSelectedArticleType(ArticleType.UnderReviewed);
      setBgColor(["", "var(--navy-blue)", ""]);
      setFtColor(["", "var(--white)", ""]);
    } else {
      setSelectedArticleType(ArticleType.Reviewed);
      setBgColor(["", "", "var(--navy-blue)"]);
      setFtColor(["", "", "var(--white)"]);
    }
  };
  return (
    <div className="container">
      <div className="filter">
        <a
          href="#"
          onClick={() => onClickFilter(ArticleType.Unreview)}
          style={{
            backgroundColor: bgColor[0],
            color: ftColor[0]
          }}
        >
          未審核
        </a>
        <a
          href="#"
          onClick={() => onClickFilter(ArticleType.UnderReviewed)}
          style={{
            backgroundColor: bgColor[1],
            color: ftColor[1]
          }}
        >
          審核中
        </a>
        <a
          href="#"
          onClick={() => onClickFilter(ArticleType.Reviewed)}
          style={{
            backgroundColor: bgColor[2],
            color: ftColor[2]
          }}
        >
          已審核
        </a>
      </div>
    </div>
  );
};

export default Filter;
