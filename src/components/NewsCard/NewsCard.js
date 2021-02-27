import React, { useState, useEffect } from "react";
import "../../public/css/NewsCard.css";

import authorImg from "../../public/images/author.jpg";
import audience from "../../public/images/audience.jpg";
import history from "../../public/images/HistoryIcon.svg";
import articleImg from "../../public/images/articleImg.jpg";
import { useSelector } from "react-redux";
const NewsCardUnreviewed = ({ articleData }) => {
  const { content, deposit, index, newsId, newsType } = articleData;
  return (
    <div className="card">
      <div className="status">未審核</div>
      <NewsCardContent isReviwedCard={false} data={content} />
      <NewsCardComment />
    </div>
  );
};
const NewsCardUnderReview = ({ articleData }) => {
  const { content, deposit, index, newsId, newsType } = articleData;
  return (
    <div className="card">
      <div className="status">審核中</div>
      <NewsCardContent isReviwedCard={false} data={content} />
      <NewsCardComment />
    </div>
  );
};
const NewsCardReviewed = () => {
  //  console.log('NewsCard');
  return (
    <div className="card">
      <div className="status">審核後</div>
      {/* <h1>NewsCard</h1> */}
      <NewsCardContent />
      <NewsCard status={false} />
      <NewsCardComment />
    </div>
  );
};
const NewsCardContent = ({ isReviwedCard, data }) => {
  const { title, author, content, time, tags } = JSON.parse(data);
  const [tagsData, setTagsData] = useState([]);
  useEffect(() => {
    /* console.log("data:", data);
    console.log("tags:", tags);*/
    // const keyNames = Object.keys(tags);

    setTagsData(tags);
    return () => {};
  }, []);
  return (
    <div className="content">
      <div className="postInfo">
        <div className="userInfo">
          <img src={authorImg} alt="Background" className="userPhoto" />
          <div className="article-data">
            <div className="userId">{author}</div>
            <div className="articleTime">{time}</div>
          </div>
        </div>
        <a href="" className={isReviwedCard == false ? "none" : "history"}>
          <img src={history} alt="History" />
        </a>
      </div>
      <div className="hashtag">
        {tagsData.map((val, index) => {
          return (
            <a href="" key={index}>
              # {val}
            </a>
          );
        })}
      </div>
      <div className="article">
        <h3>{title}</h3>
        <p>{content}</p>
        <img src={articleImg} alt="" />
        <a href="">繼續閱讀</a>
      </div>
      <div className="like">
        <div>
          {useSelector((s) => s.loginStatus) ? <a href="">想知道</a> : null}
          <span>123人想知道</span>
        </div>
        <div className={isReviwedCard == false ? "none" : "vote"}>
          <a href="">同意</a>
          <a href="">反對</a>
        </div>
      </div>
    </div>
  );
};

const NewsCardComment = () => {
  //console.log('NewsCardComment');
  return (
    <div className="comment">
      <div className="userInput">
        <img src={audience} alt="Background" className="userPhoto" />
        <input type="text" placeholder="告訴我們你的想法" />
        <a href="">傳送</a>
      </div>
      <div className="userComment">
        <img src={audience} alt="Background" className="userPhoto" />
        <span>
          <div className="userId">abc12345678</div>
          <p>大問號？！！！</p>
        </span>
        <p>20min</p>
      </div>
      <a href="">查看其他留言</a>
    </div>
  );
};

const NewsCard = ({ status }) => {
  /*  console.log('NewsCard');
      console.log('NewsCardUnreviewed', status);*/
  return (
    <div className="card">
      <div className={status ? "status" : "none"}>未審核</div>
      <NewsCardContent status={status} />
      <NewsCardComment />
    </div>
  );
};

export { NewsCardUnreviewed, NewsCardUnderReview, NewsCardReviewed };
