import React, { useState, useEffect, useRef } from "react";
import "../../public/css/NewsCard.css";
import { MemberInformation } from "../Member/MemberCard";
import * as article from "../../modules/article";
import authorImg from "../../public/images/author.jpg";
import audience from "../../public/images/audience.jpg";
import history from "../../public/images/HistoryIcon.svg";
import articleImg from "../../public/images/articleImg.jpg";
import { useSelector } from "react-redux";
import { ArticleStatus } from "../../modules/article";
import ReportIcon from "@material-ui/icons/Report";
import { useFirstUpdate } from "../../hooks/useFirstUpdate";
import * as articleWebsocket from "../../modules/articleWebsocket";
import * as member from "../../modules/member";
const NewsCardUnreviewed = ({
  articleData,
  refHook,
  onClickReportBtn,
  index,
  selectArticleId,
  setSelectArticleId,
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
        selectArticleId={selectArticleId}
        setSelectArticleId={setSelectArticleId}
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
const NewsCardContent = ({
  articleType,
  isReviewedCard,
  memberId,
  articleId,
  title,
  account,
  authorName,
  content,
  time,
  tags,
  images,
  isMemberReported,
  onClickReportBtn,
  reportedtAccount,
  evidence,
  decisionReason,
  reviewResult,
}) => {
  const [tagsData, setTagsData] = useState([]);
  const [imageState, setImageState] = useState("");
  const [reportState, setReportState] = useState(false);
  const [memberInfoFlag, setMemberInfoFlag] = useState(false);
  const [readMoreFlag, setReadMoreFlag] = useState(false);
  const [needReadMoreFlag, setNeedReadMoreFlag] = useState(false);
  const shortMaxStrLength = 5;
  let shortContent = "";
  let longContent = "";

  useEffect(() => {
    let imageData;
    let base64String = "";
    if (images && images.length > 0) {
      imageData = images[0];
    }
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
  useEffect(() => {
    setNeedReadMoreFlag(content.length > shortMaxStrLength ? true : false);
    return () => {};
  }, [content]);

  const onClickReadMore = () => {
    setReadMoreFlag((pre) => !pre);
  };
  return (
    <div className="content">
      <div className="postInfo">
        <div
          className="userInfo"
          onClick={() => {
            setMemberInfoFlag((pre) => !pre);
          }}
        >
          <div className="postData">
            <img src={authorImg} alt="Background" className="userPhoto" />
            <div className="article-data">
              <div className="account">{account}</div>
              <div className="articleTime">{time}</div>
            </div>
          </div>
          <div className={memberInfoFlag ? "memberInformationCard" : "none"}>
            <MemberInformation
              memberId={memberId}
              memberInfoFlag={memberInfoFlag}
            />
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
        {articleType == ArticleStatus.underReview ? (
          <div>
            <p> reportedtAccount:{reportedtAccount}</p>
            <p> evidence:{evidence}</p>
            <p> decisionReason:{decisionReason}</p>
            <p> reviewResult :{reviewResult}</p>
          </div>
        ) : null}

        <p
          style={{ whiteSpace: "pre-wrap", display: "inline", padding: "0 0" }}
        >
          {content.length > shortMaxStrLength
            ? content.substring(0, shortMaxStrLength)
            : content}
        </p>
        <p
          style={{
            whiteSpace: "pre-wrap",
            display:
              needReadMoreFlag && readMoreFlag == false ? "inline" : "none",
          }}
        >
          ...
        </p>
        <p
          style={{
            display: needReadMoreFlag && readMoreFlag ? "inline" : "none",
            whiteSpace: "pre-wrap",
            padding: "0 0",
          }}
        >
          {content.length > shortMaxStrLength
            ? content.substring(shortMaxStrLength, content.length - 1)
            : content}
        </p>
        <button
          style={{
            display: needReadMoreFlag && readMoreFlag == false ? "" : "none",
          }}
          onClick={onClickReadMore}
        >
          繼續閱讀
        </button>
        <img src={imageState.length > 0 ? imageState : ""} alt="" />
        <div
          className="report"
          style={{
            display: isMemberReported || reportState ? "none" : "block",
          }}
        >
          <div
            className="reportButton"
            onClick={() => {
              onClickReportBtn(articleId);
              setReportState(true);
            }}
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
  selectArticleId,
  setSelectArticleId,
}) => {
  const isNotFirstRun = useFirstUpdate();
  const [likeState, setLikeState] = useState(false);
  const [likeAmountState, setLikeAmountState] = useState(0);
  const [commentAmountState, setCommentAmountState] = useState(0);
  const [openCommentFlag, setOpenCommentFlag] = useState(false);
  const [inputCommentState, setInputCommentState] = useState("");
  const [createCommentsDataArray, setCreateCommentsDataArray] = useState([]);

  const [commentsDataArray, setCommentsDataArray] = useState([]);
  const [requireCommentIndex, setRequireCommentIndex] = useState(1);
  // const [memberCommentIdArray, setMemberCommentIdArray] = useState([]);
  const memberCommentIdArray = useRef([]);
  const maxRequestAmount = 3;
  useEffect(() => {
    setCommentAmountState(commentAmount);
    setLikeState(isMemberLike);
    setLikeAmountState(likeAmount);
  }, []);

  const onClickCommentCollapse = () => {
    setOpenCommentFlag((pre) => !pre);
  };
  const getCommentsRangeFunc = (data) => {
    if (data == "401") {
      alert("login fail");
      return;
    }
    const [tmpCommentDataArray, commentAmount] = data;
    setCommentsDataArray((pre) => [...pre, ...tmpCommentDataArray]);
    setCommentAmountState(commentAmount);
    setRequireCommentIndex((pre) => pre + maxRequestAmount);
  };

  const newCommentFunc = (data) => {
    if (data == "401") {
      alert("login fail");
      return;
    }
    setCommentAmountState((pre) => pre + 1);
    setRequireCommentIndex((pre) => pre + 1);
    setCreateCommentsDataArray((pre) => {
      return [data, ...pre];
    });
    memberCommentIdArray.current.push(data.id);
  };
  useEffect(() => {
    setOpenCommentFlag((pre) => {
      return selectArticleId != articleId ? false : true;
    });
    return () => {};
  }, [selectArticleId]);
  useEffect(() => {
    if (openCommentFlag) {
      articleWebsocket.connectArticleServer();
      articleWebsocket.startArticleWebsocket(
        getCommentsRangeFunc,
        newCommentFunc
      );
      article.getCommentsRange(
        articleId,
        requireCommentIndex,
        requireCommentIndex + maxRequestAmount
      );
    } else {
    }
    setSelectArticleId((pre) => {
      // article.disconnect(articleId);
      const result = openCommentFlag ? articleId : pre;
      return result;
    });
    return () => {};
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
  const onClickMoreComment = () => {
    article.getCommentsRange(
      articleId,
      requireCommentIndex,
      requireCommentIndex + maxRequestAmount
    );
  };

  return (
    <div className="comment">
      <div className={openCommentFlag ? "like" : "like border-b-0"}>
        <div>
          <button
            style={{ color: likeState ? "var(--deep-blue)" : null }}
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
        <div className={isReviewedCard == false ? "none" : "null"}>
          <button>同意</button>
        </div>
        <div className={isReviewedCard == false ? "none" : "null"}>
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
        {createCommentsDataArray.map((value) => {
          return <Comment key={value.id} id={value.id} data={value} />;
        })}
        {commentsDataArray.map((value) => {
          if (memberCommentIdArray.current.every((id) => id != value.id))
            return <Comment key={value.id} id={value.id} data={value} />;
        })}
        <button className="moreComment" onClick={onClickMoreComment}>
          查看其他留言
        </button>
      </div>
    </div>
  );
};
const Comment = React.memo(
  ({ data, id }) => {
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
  },
  (pre, next) => {
    return pre.id != next.id ? false : true;
  }
);

const NewsCard = React.memo(
  ({
    articleType,
    articleData,
    onClickReportBtn,
    refFunc,
    selectArticleId,
    setSelectArticleId,
  }) => {
    // return <div ref={refFunc}> {tmpNewsCard} </div>;
    const {
      memberId,
      articleId,
      title,
      account,
      authorName,
      content,
      time,
      tags,
      images,
      isMemberReported,
      likeAmount,
      commentAmount,
      isMemberLike,
      evidence,
      reportedtAccount,
      decisionReason,
      reviewResult,
    } = articleData;

    return (
      <div ref={refFunc} className="card">
        <NewsCardTop />
        <NewsCardContent
          articleType={articleType}
          memberId={memberId}
          articleId={articleId}
          title={title}
          account={account}
          authorName={authorName}
          content={content}
          time={time}
          tags={tags}
          images={images}
          isMemberReported={isMemberReported}
          onClickReportBtn={onClickReportBtn}
          isReviewedCard={false}
          reportedtAccount={reportedtAccount}
          evidence={evidence}
          decisionReason={decisionReason}
          reviewResult={reviewResult}
        />
        <NewsCardComment
          articleId={articleId}
          likeAmount={likeAmount}
          commentAmount={commentAmount}
          isMemberLike={isMemberLike}
          selectArticleId={selectArticleId}
          setSelectArticleId={setSelectArticleId}
          isReviewedCard={
            articleType == ArticleStatus.underReview ? true : false
          }
        />
      </div>
    );
  },
  (pre, next) => {
    if (pre.selectArticleId != next.selectArticleId) return false;
    if (pre && pre.articleData.id === next.articleData.id) {
      return true;
    }
    // if(pre.selectArticleId!=next.selectArticleId)     selectArticleId={selectArticleId}
    // setSelectArticleId={setSelectArticleId}
    return false;
  }
);

export { NewsCard };
