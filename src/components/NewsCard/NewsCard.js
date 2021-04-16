import React, { useState, useEffect, useRef } from "react";
import "../../public/css/NewsCard.css";
import { MemberInformation } from "../Member/MemberCard";
import * as article from "../../modules/article";
import authorImg from "../../public/images/author.jpg";
import audience from "../../public/images/audience.jpg";
import history from "../../public/images/HistoryIcon.svg";
import articleImg from "../../public/images/articleImg.jpg";
import { useSelector } from "react-redux";
import { ArticleStatus, VotedResultStatus } from "../../modules/article";
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

export const NewsCardTop = ({ articleStatus, voteResult }) => {
  const [status, setStatus] = useState("未審核");
  useEffect(() => {
    let s = status;
    if (articleStatus == ArticleStatus.unreview) {
      s = "未審核";
    } else if (articleStatus == ArticleStatus.underReview) {
      s = "審核中";
    } else if (articleStatus == ArticleStatus.verified) {
      if (voteResult == VotedResultStatus.realNews) {
        s = "真新聞";
      } else if (voteResult == VotedResultStatus.fakeNews) {
        s = "假新聞";
      } else if (voteResult == VotedResultStatus.reportedAgain) {
        s = "重新審核";
      }
    }

    setStatus(s);
    return () => { };
  }, [articleStatus, voteResult]);
  return (
    <div className="cardTop">
      <div className="status">{status}</div>
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
export const NewsCardContent = ({
  articleStatus,
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
  imagesUrl,
  isMemberReported,
  onClickReportBtn,
  reportedtAccount,
  evidence,
  decisionReason,
  reviewResult,
}) => {
  const [tagsData, setTagsData] = useState([]);
  const [imageState, setImageState] = useState("");
  const [imageUrtlState, setImageUrlState] = useState("");
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
    if (imagesUrl && imagesUrl.length > 0) {
      setImageUrlState(imagesUrl[0]);
    } else {
      if (images && images.length > 0) {
        imageData = images[0];
      }
      if (imageData) {
        const arrayBuffer = Uint8Array.from(imageData.data).buffer;
        base64String =
          "data:image/png;base64," +
          btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
      }
    }

    setImageState(base64String);
    setTagsData(tags);
    return () => { }; //
  }, []);
  useEffect(() => {
    setNeedReadMoreFlag(content.length > shortMaxStrLength ? true : false);
    return () => { };
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
        {articleStatus == ArticleStatus.underReview ||
          articleStatus == ArticleStatus.verified ? (
            <div>
              {reviewResult == 2 ? (
                <h2
                  className="reviewResult"
                  style={{ color: "var(--navy-blue)" }}
                >
                  審查者認為本消息是真的
              </h2>
              ) : (
                  <h2 className="reviewResult" style={{ color: "var(--brown)" }}>
                    審查者認為本消息是假的
              </h2>
                )}
              {/* <h2 className="reviewResult">審查者認為本消息是真實的</h2> */}
              <div className="articleContent">
                {/*<p> reportedtAccount:{reportedtAccount}</p>
              <p> evidence:{evidence}</p>{/*檢舉者給的內容*/}
                {/*<p> decisionReason:{decisionReason}</p>{/*審查者給的內容*/}
                {/*<p> reviewResult :{reviewResult}</p>{/*2是同意3是不同意*/}
                <p>{decisionReason}</p>
                {/*審查者給的內容*/}
              </div>
            </div>
          ) : null}
        <div
          className={
            articleStatus == ArticleStatus.underReview ||
              articleStatus == ArticleStatus.verified
              ? "articleContent underReview"
              : "articleContent"
          }
        >
          <p style={{ whiteSpace: "pre-wrap" }}>
            {content.length > shortMaxStrLength
              ? content.substring(0, shortMaxStrLength)
              : content}
          </p>
          <p
            style={{
              display:
                needReadMoreFlag && readMoreFlag == false ? "inline" : "none",
            }}
          >
            ...
          </p>
          <p
            style={{
              display: needReadMoreFlag && readMoreFlag ? "inline" : "none",
            }}
          >
            {content.length > shortMaxStrLength
              ? content.substring(shortMaxStrLength, content.length - 1)
              : content}
          </p>
          {/* <a href="https://i.imgur.com/Nnhbuhh.png">https://i.imgur.com/Nnhbuhh.png</a> */}
          {/* <img src="https://i.imgur.com/Nnhbuhh.png" alt=""/> */}
          <button
            style={{
              display: needReadMoreFlag && readMoreFlag == false ? "" : "none",
            }}
            onClick={onClickReadMore}
          >
            繼續閱讀
          </button>
        </div>
        <img src={imageUrtlState ? imageUrtlState : ""} alt="" />
        <img
          src={!imagesUrl && imageState.length > 0 ? imageState : ""}
          alt=""
        />
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
  reportedAgreeAmount,
  reportedDisagreeAmount,
  commentAmount,
  isMemberLike,
  selectArticleId,
  setSelectArticleId,
  reportedAgreeVote,
  reportedDisagreeVote,
}) => {
  const isNotFirstRun = useFirstUpdate();
  const [likeState, setLikeState] = useState(false);
  const [likeAmountState, setLikeAmountState] = useState(0);
  const [reportedAgreeVoteState, setReportedAgreeVoteState] = useState(false);
  const [reportedDisagreeVoteState, setReportedDisagreeVoteState] = useState(
    false
  );
  const [reportedAgreeAmountState, setReportedAgreeAmount] = useState(0);
  const [reportedDisagreeAmountState, setReportedDisagreeAmount] = useState(0);
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
    setReportedAgreeVoteState(reportedAgreeVote);
    setReportedDisagreeVoteState(reportedDisagreeVote);
    setReportedAgreeAmount(reportedAgreeAmount);
    setReportedDisagreeAmount(reportedDisagreeAmount);
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
    return () => { };
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
    return () => { };
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
  const onClickAgreeVote = async (isAgree) => {
    let result;

    if (isAgree) {
      if (!reportedAgreeVoteState) {
        result = await article.createReportedVote(articleId, isAgree);
      } else {
        result = await article.deleteReportedVote(articleId, isAgree);
      }
    } else {
      if (!reportedDisagreeVoteState) {
        result = await article.createReportedVote(articleId, isAgree);
      } else {
        result = await article.deleteReportedVote(articleId, isAgree);
      }
    }
    const {
      reportedAgreeAmount,
      reportedDisagreeAmount,
      isSucessfulRemoveVote,
    } = result;
    console.log("result:", result);
    setReportedAgreeAmount((pre) => (result ? reportedAgreeAmount : pre));
    setReportedDisagreeAmount((pre) => (result ? reportedDisagreeAmount : pre));
    setReportedAgreeVoteState((pre) => (result && isAgree ? !pre : false));
    setReportedDisagreeVoteState((pre) =>
      result && isAgree == false ? !pre : false
    );
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
            style={{ color: likeState ? "var(--sky-blue)" : null }}
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
        <div className={isReviewedCard == false ? "none" : null}>
          <button
            style={{ color: reportedAgreeVoteState ? "var(--sky-blue)" : null }}
            onClick={() => {
              onClickAgreeVote(true);
            }}
          >
            {reportedAgreeAmountState}人同意
          </button>
        </div>
        <div className={isReviewedCard == false ? "none" : null}>
          <button
            style={{ color: reportedDisagreeVoteState ? "var(--brown)" : null }}
            onClick={() => {
              onClickAgreeVote(false);
            }}
          >
            {reportedDisagreeAmountState}人反對
          </button>
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
    articleStatus,
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
      imagesUrl,
      isMemberReported,
      likeAmount,
      reportedAgreeAmount,
      reportedDisagreeAmount,
      commentAmount,
      isMemberLike,
      evidence,
      reportedtAccount,
      decisionReason,
      reviewResult,
      reportedAgreeVote,
      reportedDisagreeVote,
      voteResult,
    } = articleData;
    return (
      <div ref={refFunc} className="card">
        <NewsCardTop articleStatus={articleStatus} voteResult={voteResult} />
        <NewsCardContent
          articleStatus={articleStatus}
          memberId={memberId}
          articleId={articleId}
          title={title}
          account={account}
          authorName={authorName}
          content={content}
          time={time}
          tags={tags}
          images={images}
          imagesUrl={imagesUrl}
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
          reportedAgreeAmount={reportedAgreeAmount}
          reportedDisagreeAmount={reportedDisagreeAmount}
          commentAmount={commentAmount}
          isMemberLike={isMemberLike}
          selectArticleId={selectArticleId}
          setSelectArticleId={setSelectArticleId}
          reportedAgreeVote={reportedAgreeVote}
          reportedDisagreeVote={reportedDisagreeVote}
          isReviewedCard={
            articleStatus == ArticleStatus.underReview ? true : false
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
    return false;
  }
);

export { NewsCard };
