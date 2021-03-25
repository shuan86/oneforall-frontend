import React, { useState, useEffect } from "react";
import "../../public/css/NewsCard.css";
import { MemberInformation } from "../Member/MemberCard";
import * as article from "../../modules/article";
import authorImg from "../../public/images/author.jpg";
import audience from "../../public/images/audience.jpg";
import history from "../../public/images/HistoryIcon.svg";
import articleImg from "../../public/images/articleImg.jpg";
import { useSelector } from "react-redux";
import { NewsType } from "../../interfaces/IContract";
import ReportIcon from "@material-ui/icons/Report";
import { useFirstUpdate } from "../../hooks/useFirstUpdate";
import * as articleWebsocket from "../../modules/articleWebsocket";

const NewsCardUnreviewed = ({
  articleData,
  refHook,
  onClickReportBtn,
  index,
}) => {
  const { articleId, likeAmount, commentAmount, isMemberLike } = articleData;
  return (
    <div className="card">
      <NewsCardTop />
      <NewsCardContent
        isReviewedCard={false}
        data={articleData}
        onClickReportBtn={onClickReportBtn}
      />
      <NewsCardComment
        articleId={articleId}
        isReviewedCard={false}
        likeAmount={likeAmount}
        commentAmount={commentAmount}
        isMemberLike={isMemberLike}
      />
    </div>
  );
};
const NewsCardUnderReview = ({
  articleData,
  onClickReportBtn,
  likeAmount,
  commentAmount,
}) => {
  return (
    <div className="card">
      <div className="status">審核中</div>
      <NewsCardContent
        isReviewedCard={false}
        data={articleData}
        onClickReportBtn={onClickReportBtn}
      />
      <NewsCardComment
        isReviewedCard={false}
        likeAmount={likeAmount}
        commentAmount={commentAmount}
      />
    </div>
  );
};
const NewsCardReviewed = ({ likeAmount, commentAmount, isMemberLike }) => {
  //  console.log('NewsCard');
  return (
    <div className="card">
      <div className="status">審核後</div>

      <NewsCardContent />
      <NewsCard status={false} />
      <NewsCardComment
        likeAmount={likeAmount}
        commentAmount={commentAmount}
        isMemberLike={isMemberLike}
      />
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

const NewsCardComment = ({
  articleId,
  isReviewedCard,
  likeAmount,
  commentAmount,
  isMemberLike,
}) => {
  const isNotFirstRun = useFirstUpdate(articleId);
  const [likeState, setLikeState] = useState(false);
  const [likeAmountState, setLikeAmountState] = useState(0);
  const [commentAmountState, setCommentAmountState] = useState(0);
  const [openCommentFlag, setOpenCommentFlag] = useState(false);
  const [inputCommentState, setInputCommentState] = useState("");
  const [commentsDataArray, setCommentsDataArray] = useState([]);
  const [requireCommentIndex, setRequireCommentIndex] = useState(1);
  const maxRequestAmount = 3;
  useEffect(() => {
    setCommentAmountState(commentAmount);
    setLikeState(isMemberLike);
    setLikeAmountState(likeAmount);
  }, []);

  const onClickCommentCollapse = () => {
    // setSelectedArticleId((pre) => (openCommentFlag == false ? articleId : pre));
    setOpenCommentFlag((pre) => !pre);
    // console.log("onClickCommentCollapse selectedArticleId:", selectedArticleId);
  };
  const getCommentsRangeFunc = (data) => {
    console.log("getCommentsFunc:", data);
    const [tmpCommentDataArray, commentAmount] = data;
    setCommentsDataArray(tmpCommentDataArray);
    setCommentAmountState(commentAmount);
    setRequireCommentIndex((pre) => pre + maxRequestAmount);
  };

  const creatCommentFunc = (msg) => {
    setCommentAmountState((pre) => pre + 1);
    console.log("creatCommentFunc:", inputCommentState);
  };
  useEffect(() => {
    if (openCommentFlag) {
      console.log("articleWebsocket");
      articleWebsocket.connectArticleServer();
      articleWebsocket.startArticleWebsocket(
        getCommentsRangeFunc,
        creatCommentFunc
      );
      article.getCommentsRange(
        articleId,
        requireCommentIndex,
        requireCommentIndex + maxRequestAmount
      );
    } else {
      article.disconnect(articleId);
    }

    return () => {
      article.disconnect(articleId);
    };
  }, [openCommentFlag]);

  const onClickLike = async () => {
    let amount = 0;
    let likeStatus = false;
    if (isNotFirstRun) {
      if (!likeState) {
        const { likeAmount, isSucessfulCreateLike } = await article.createLike(
          articleId
        );
        amount = likeAmount;
        likeStatus = isSucessfulCreateLike ? true : false;
      } else {
        const { likeAmount, isSucessfulRemoveLike } = await article.deleteLike(
          articleId
        );
        amount = likeAmount;
        likeStatus = isSucessfulRemoveLike ? false : true;
      }
    }
    setLikeAmountState((pre) =>
      isNotFirstRun && amount != null ? amount : pre
    );
    setLikeState((pre) => (isNotFirstRun && amount != null ? likeStatus : pre));
  };
  const onInputCommentChange = (e) => {
    const value = e.target.value;
    setInputCommentState(value);
  };

  const onClickSendComment = () => {
    const length = inputCommentState.length;
    length > 0 && article.createComment(articleId, inputCommentState);
  };
  return (
    <div className="comment">
      <div className={openCommentFlag ? "like" : "like border-b-0"}>
        <div>
          <button
            style={{ color: likeState ? "blue" : "red" }}
            onClick={onClickLike}
          >
            {likeAmountState} 人想知道
          </button>
        </div>
        <div>
          <button onClick={onClickCommentCollapse}>
            {commentAmountState} 留言
          </button>
        </div>
        <div className={isReviewedCard == false ? "none" : "vote"}>
          <button>同意</button>
          <button>反對</button>
        </div>
      </div>
      <div className={openCommentFlag ? null : "none"}>
        <div className="userInput">
          <input
            type="text"
            placeholder="告訴我們你的想法"
            onChange={onInputCommentChange}
          />
          <button onClick={onClickSendComment}>傳送</button>
        </div>
        {commentsDataArray.map((value, index) => {
          return <Comment key={value.id} data={value} />;
        })}

        {/* <Comment />
        <Comment />
        <Comment />
        <Comment /> */}
        <a href="" className="moreComment">
          查看其他留言
        </a>
      </div>
    </div>
  );
};

const Comment = ({ data }) => {
  const { account, time, content } = data;
  return (
    <div className="userComment">
      <span>
        <div className="account">
          <h3>{account}</h3>
          <p>{time}</p>
        </div>
        <p>{content}</p>
      </span>
      {/* <div className="timeCode"><p>20min</p></div> */}
    </div>
  );
};

const NewsCard = React.memo(
  ({ articleData, onClickReportBtn, refFunc }) => {
    let tmpNewsCard = (
      <NewsCardUnreviewed
        articleData={articleData}
        onClickReportBtn={onClickReportBtn}
      />
    );
    if (articleData.newsType == NewsType.UnderReviewed) {
      tmpNewsCard = (
        <NewsCardUnderReview
          articleData={articleData}
          onClickReportBtn={onClickReportBtn}
        />
      );
    } else if (articleData.newsType == NewsType.Reviewed) {
      tmpNewsCard = (
        <NewsCardReviewed
          articleData={value}
          onClickReportBtn={onClickOpenReportDialogBtn}
        />
      );
    } else {
      tmpNewsCard = (
        <NewsCardUnreviewed
          articleData={articleData}
          onClickReportBtn={onClickReportBtn}
        />
      );
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
