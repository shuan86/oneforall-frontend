import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../public/css/NewsCard.css";
import { ArticleType } from "../../modules/article";
const Filter = ({ setSelectedArticleType }) => {
  const [bgColor, setBgColor] = useState(["blue", "", ""]);

  const onClickFilter = (articleType) => {
    if (articleType == ArticleType.Unreview) {
      setSelectedArticleType(ArticleType.Unreview);
      setBgColor(["blue", "", ""]);
    } else if (articleType == ArticleType.UnderReviewed) {
      setSelectedArticleType(ArticleType.UnderReviewed);
      setBgColor(["", "blue", ""]);
    } else {
      setSelectedArticleType(ArticleType.Reviewed);
      setBgColor(["", "", "blue"]);
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
          }}
        >
          未審核
        </a>
        <a
          href="#"
          onClick={() => onClickFilter(ArticleType.UnderReviewed)}
          style={{
            backgroundColor: bgColor[1],
          }}
        >
          審核中
        </a>
        <a
          href="#"
          onClick={() => onClickFilter(ArticleType.Reviewed)}
          style={{
            backgroundColor: bgColor[2],
          }}
        >
          已審核
        </a>
      </div>
    </div>
  );
};

export default Filter;
