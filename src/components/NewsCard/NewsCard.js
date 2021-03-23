import React, { useState, useEffect } from "react";
import "../../public/css/NewsCard.css";
import { MemberInformation } from "../Member/MemberCard";

import authorImg from "../../public/images/author.jpg";
import audience from "../../public/images/audience.jpg";
import history from "../../public/images/HistoryIcon.svg";
import articleImg from "../../public/images/articleImg.jpg";
import { useSelector } from "react-redux";
import { NewsType } from "../../interfaces/IContract";

import ReportIcon from "@material-ui/icons/Report";

const NewsCardUnreviewed = ({ articleData, refHook, onClickReportBtn }) => {
  return (
    <div className="card">
      <NewsCardTop />
      <NewsCardContent
        isReviewedCard={false}
        data={articleData}
        onClickReportBtn={onClickReportBtn}
      />
      <NewsCardComment isReviewedCard={false} />
    </div>
  );
};
const NewsCardUnderReview = ({ articleData, onClickReportBtn }) => {
  return (
    <div className="card">
      <div className="status">審核中</div>
      <NewsCardContent
        isReviewedCard={false}
        data={articleData}
        onClickReportBtn={onClickReportBtn}
      />
      <NewsCardComment isReviewedCard={false} />
    </div>
  );
};
const NewsCardReviewed = ({}) => {
  //  console.log('NewsCard');
  return (
    <div className="card">
      <div className="status">審核後</div>

      <NewsCardContent />
      <NewsCard status={false} />
      <NewsCardComment />
    </div>
  );
};

const NewsCardTop = () => {
  return (
    <div className="cardTop">
      <div className="status">未審核</div>
      <div className="scrollingText">
        <div className="userComment">
          <span>
            <div className="account color-red">abc12345678</div>
            <p>大問號？！！！</p>
          </span>
        </div>
      </div>
    </div>
  );
};
const NewsCardContent = ({ isReviewedCard, data, onClickReportBtn }) => {
  const { articleId, title, authorName, content, time, tags, images } = data;
  const [tagsData, setTagsData] = useState([]);
  const [imageState, setImageState] = useState("");

  const [memberFlag, setMemberFlag] = useState(false);

  useEffect(() => {
    const imageData = images[0];
    let base64String = "";
    // console.log("imageData :", imageData);
    if (imageData) {
      const arrayBuffer = Uint8Array.from(imageData.data).buffer;

      base64String =
        "data:image/png;base64," +
        btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
    }
    setImageState(base64String);
    setTagsData(tags);
    return () => {}; //
  }, []);

  return (
    <div className="content">
      <div className="postInfo">
        <div
          className="userInfo"
          onClick={() => {
            setMemberFlag(!memberFlag);
          }}
        >
          <div className="postData">
            <img src={authorImg} alt="Background" className="userPhoto" />
            <div className="article-data">
              <div className="account">{authorName}</div>
              <div className="articleTime">{time}</div>
            </div>
          </div>
          <div className={memberFlag ? "memberInformationCard" : "none"}>
            <MemberInformation setMemberFlag={setMemberFlag} />
          </div>
        </div>
        <a href="" className={isReviewedCard == false ? "none" : "history"}>
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
        <a href="">繼續閱讀</a>
        <img src={imageState.length > 0 ? imageState : articleImg} alt="" />
        <div className="report">
          <div
            className="reportButton"
            onClick={() => onClickReportBtn(articleId)}
          >
            <ReportIcon fontSize="small" />
            <div>檢舉</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCardComment = ({ isReviewedCard }) => {
  //console.log('NewsCardComment');
  const [commentFlag, setCommentFlag] = useState(false);
  const onClickCommentCollapse = () => {
    setCommentFlag(true);
  };

  return (
    <div className="comment">
      <div className={commentFlag ? "like" : "like border-b-0"}>
        <div>
          <button>123 人想知道</button>
        </div>
        <div>
          <button onClick={onClickCommentCollapse}>10 留言</button>
        </div>
        <div className={isReviewedCard == false ? "none" : "vote"}>
          <button>同意</button>
          <button>反對</button>
        </div>
      </div>
      <div className={commentFlag ? null : "none"}>
        <div className="userInput">
          <input type="text" placeholder="告訴我們你的想法" />
          <a href="">傳送</a>
        </div>
        <NewsCardUserComment />
        <NewsCardUserComment />
        <NewsCardUserComment />
        <NewsCardUserComment />
        <NewsCardUserComment />
        <a href="" className="moreComment">
          查看其他留言
        </a>
      </div>
    </div>
  );
};

const NewsCardUserComment = () => {
  return (
    <div className="userComment">
      <span>
        <div className="account">
          <h3>abc12345678</h3>
          <p>20min</p>
        </div>
        <p>大問號？！！！</p>
      </span>
      {/* <div className="timeCode"><p>20min</p></div> */}
    </div>
  );
};

const NewsCard = React.memo(
  ({ articleData, memberLikeArray, onClickReportBtn, refFunc }) => {
    console.log("articleData:", articleData.id);
    console.log("memberLikeArray:", memberLikeArray);
    let tmpNewsCard = (
      <NewsCardUnreviewed
        articleData={articleData}
        onClickReportBtn={onClickReportBtn}
      />
    );
    if (articleData.newsType == NewsType.Unreview) {
      <NewsCardUnreviewed
        articleData={articleData}
        onClickReportBtn={onClickReportBtn}
      />;
    } else if (articleData.newsType == NewsType.UnderReviewed) {
      <NewsCardUnderReview
        articleData={articleData}
        onClickReportBtn={onClickReportBtn}
      />;
    } else if (articleData.newsType == NewsType.Reviewed) {
      <NewsCardReviewed
        articleData={value}
        onClickReportBtn={onClickOpenReportDialogBtn}
      />;
    }
    return <div ref={refFunc}> {tmpNewsCard} </div>;
  },
  (prevProps, nextProps) => {
    if (prevProps && prevProps.articleData.id === nextProps.articleData.id) {
      return true;
    }
    return false;
  }
);

export { NewsCard };
