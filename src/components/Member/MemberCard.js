import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../public/css/MemberCard.css";

import ApplyReviewerDialog from "./ApplyReviewerDialog";
import ApplyPublisherDialog from "./ApplyPublisherDialog";

import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import Copper10 from "../../public/images/medals/copper10.png";
import { getMemberInfo } from "../../modules/member";
const MemberCard = () => {
  return (
    <div className={"personalInfo"}>
      <div className={"personalPhoto"}>
        <img src="favicon.ico" alt="" />
      </div>
      <div className={"infoContent"}>
        <p>使用者名稱</p>
        <p>{useSelector((s) => s.member.account)}</p>
        <p>電子信箱</p>
        <p>{useSelector((s) => s.member.email)}</p>
        <p>錢包地址</p>
        <p>{useSelector((s) => s.member.publicKey)}</p>
      </div>
    </div>
  );
};

const MemberInformation = ({ memberInfoFlag, memberId }) => {
  const [memberInfoState, setmemberInfoState] = useState({
    account: " ",
    publicKey: " ",
    exp: "0",
    createTime: "2021-01-01",
  });
  const [openFlag, setOpenFlag] = useState(false);
  const onClickCloseMemberInformation = () => {
    setOpenFlag(false);
  };
  useEffect(() => {
    const asyncFunc = async () => {
      let result;
      if (memberInfoFlag) {
        result = await getMemberInfo(memberId);
      }
      setmemberInfoState((pre) => (memberInfoFlag && result ? result : pre));
      setOpenFlag(memberInfoFlag);
    };
    asyncFunc();

    return () => {};
  }, [memberInfoFlag]);

  return (
    <div className={openFlag ? "memberInformation" : "none"}>
      <div className="close" onClick={onClickCloseMemberInformation}>
        <CloseOutlinedIcon />
      </div>
      <div className={"memberInformationPersonal"}>
        <img src="favicon.ico" alt="" className="userPhoto" />
        <div className={"userAccount"}>
          <div className="userAccountID">
            <p>{memberInfoState.account}</p>
            <img src={Copper10} alt="medals" className="medals" />
          </div>
          <p>{memberInfoState.exp}分</p>
          <p>註冊日期：{memberInfoState.createTime}</p>
        </div>
      </div>
      <div className="publicKey">
        <p className="">{memberInfoState.publicKey}</p>
        <FileCopyOutlinedIcon fontSize="small" />
      </div>
      <a href="#">追隨</a>
    </div>
  );
};

const VistorRight = ({
  isPublisher,
  isReviewer,
  onClickChangeMemberStatus,
  EnumMemberStatus,
}) => {
  return (
    <div className="memberRight">
      <div className={"memberTable"}>
        <p>觀看者</p>
        <div className={"tablePosition"}>
          <div className={"memberScore"}>
            <p>積分</p>
            <p>1283</p>
          </div>
          <div className={"memberFollower"}>
            <p>已追蹤</p>
            <p>83</p>
          </div>
        </div>
        <div className="missionBtn">
          {/* <button>我要發文</button> */}
          <button
            onClick={() =>
              {console.log('發文');}
            }
          >
            我要發文討論
          </button>
        </div>
        {!isReviewer ? <ApplyReviewerDialog /> : null}
        {!isPublisher ? <ApplyPublisherDialog /> : null}
      </div>
      <div className={"memberInform"}>
        <p>投票紀錄</p>
        <VoteContent />
        <VoteContent />
        <VoteContent />
      </div>
    </div>
  );
};

const ReviewerRight = ({
  isPublisher,
  isReviewer,
  onClickChangeMemberStatus,
  EnumMemberStatus,
}) => {
  return (
    <div className="memberRight">
      <div className={"memberTable"}>
        <p>審核者</p>
        <div className={"tablePosition"}>
          <div className={"memberScore"}>
            <p>積分</p>
            <p>1283</p>
          </div>
          <div className={"memberFollower"}>
            <p>追蹤</p>
            <p>83</p>
          </div>
        </div>
        <div className={"adviseMission"}>
          <p>審核任務</p>
          <MissionContent />
          <div className="missionBtn">
            <button
              onClick={() =>
                onClickChangeMemberStatus(EnumMemberStatus.reviewer)
              }
            >
              我要審查
            </button>
          </div>
          <div className="missionBtn">
            {isReviewer ? (
              <button
                onClick={() =>
                  onClickChangeMemberStatus(EnumMemberStatus.reviewer)
                }
              >
                我要審查文章
              </button>
            ) : null}
          </div>
        </div>
        {/* {isPublisher == false ? (
          <div className="missionBtn">
            <button
              onClick={() =>
                onClickChangeMemberStatus(EnumMemberStatus.publisher)
              }
            >
              我要發文討論
            </button>
          </div>
        ) : null} */}
      </div>
      <div className={"memberInform"}>
        <p>通知</p>
        <InformContent />
        <InformContent />
        <InformContent />
      </div>
    </div>
  );
};

const AuthorRight = ({onClickChangeMemberStatus,EnumMemberStatus}) => {
  return (
    <div className="memberRight">
      <div className={"memberTable"}>
        <p>發文者</p>
        <div className={"memberPost"}>
          <p>已提交新聞數</p>
          <p>128</p>
        </div>
        <div className={"missionBtn"} onClick={()=>onClickChangeMemberStatus(EnumMemberStatus.publisher)}>
          <button>我要發表新聞</button>
        </div>
      </div>
      <div className={"memberInform"}>
        <p>發文紀錄</p>
        <PublishedContent />
        <PublishedContent />
        <PublishedContent />
      </div>
    </div>
  );
};

const InformContent = () => {
  return (
    <div className={"informContainer"}>
      <p>
        因為成功證實「因原物料做口罩，衛生紙將成為下一波缺貨物資」獲得了0.1
        ETH，謝謝你為了真實消息的付出
      </p>
      <p>12-15 21:30</p>
    </div>
  );
};

const MissionContent = () => {
  return (
    <div className={"informContainer"}>
      <p>
        12/1開始，超商、公共場所都要戴口罩，好多人因沒戴口罩，警察於某超商門口開罰單~3000元
      </p>
    </div>
  );
};

const VoteContent = () => {
  return (
    <div className={"informContainer"}>
      <p>您在「因原物料做口罩，衛生紙將成為下一波缺貨物資」一文中投下了支持</p>
      <p>12-15 21:30</p>
    </div>
  );
};

const PublishedContent = () => {
  return (
    <div className={"informContainer"}>
      <p>
        您於 12-15 21:30 發佈了「因原物料做口罩，衛生紙將成為下一波缺貨物資」
      </p>
      <p>12-15 21:30</p>
    </div>
  );
};

export {
  MemberCard,
  ReviewerRight,
  VistorRight,
  AuthorRight,
  MemberInformation,
};
