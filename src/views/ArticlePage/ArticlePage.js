import React, { useEffect, useState } from "react";
import {
  NewsCardTop,
  NewsCardContent,
} from "../../components/NewsCard/NewsCard";
import { getArticle, getBase64Str } from "../../modules/article";
import { useGetParams } from "../../hooks/useGetParams";
const ArticlePage = () => {
  const [articleDataState, setArticleDataState] = useState({});
  const [imageState, setImageState] = useState("");
  const [imageUrtlState, setImageUrlState] = useState("");
  const articleId = useGetParams();
  useEffect(() => {
    let articleData;
    let base64String = "";
    let tmpImgUrlData = "";
    const asyncFunc = async () => {
      let result;
      if (articleId != undefined) result = await getArticle(articleId);
      if (result) {
        if (result.imagesUrl) {
        } else {
          result.images[0] = await getBase64Str(result.images[0]);
          base64String = result.images[0];
        }
        if (result.imagesUrl.length > 0) {
          const { data: imgUrlData } = result.imagesUrl[0];

          tmpImgUrlData = imgUrlData;
        }
      }

      setArticleDataState((pre) => (result ? result : pre));
      setImageState(base64String);
      setImageUrlState(tmpImgUrlData ? tmpImgUrlData : "");
    };
    asyncFunc();
    return () => { };
  }, []);



  return (
    <div className="container navBarFixed">
      <h1> 標題:{articleDataState.title}</h1>
      <p> 內容:{articleDataState.content}</p>
      <img src={imageUrtlState ? imageUrtlState : ""} alt="" />
      <img src={imageState ? imageState : ""} alt="" />
    </div>
  );
};
export default ArticlePage;
