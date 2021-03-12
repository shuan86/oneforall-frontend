import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../public/css/MemberCard.css";
import ApplyReviewerDialog from "./ApplyReviewerDialog";
import ApplyPublisherDialog from "./ApplyPublisherDialog";

import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

import Copper10 from '../../public/images/medals/copper10.png'

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

const MemberInformation = ({setMemberFlag}) => {
  const onClickCloseMemberInformation = () => {
    setMemberFlag(false);
  }
  return (
    <div className="memberInformation">
      <div className="close" onClick={onClickCloseMemberInformation}><CloseOutlinedIcon /></div>
      <div className={"memberInformationPersonal"}>
        <img src="favicon.ico" alt="" className="userPhoto"/>
        <div className={"userAccount"}>
          <div className="userAccountID">
            <p>a1233456</p>
            <img src={Copper10} alt="medals" className="medals"/>
          </div>
          <p>477分</p>
          <p>註冊日期：2020-03-11</p>
        </div>
      </div>
      <div className="publicKey">
        <p className="">0x59982711466fD1d4C2F1C1F710f721651BCCFDb3</p>
        <FileCopyOutlinedIcon fontSize="small"/>
      </div>
      <a href="#">追隨</a>
    </div>
  );
};

const VistorRight = ({ isPublisher, isReviewer }) => {
  console.log("isPublisher:", isPublisher);
  return (
    <div>
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
      </div>
      <div className={"memberInform"}>
        <p>投票紀錄</p>
        <VoteContent />
        <VoteContent />
        <VoteContent />
      </div>

      {isReviewer == false ? <ApplyReviewerDialog /> : null}
      {isPublisher == false ? <ApplyPublisherDialog /> : null}
    </div>
  );
};

const ReviewerRight = () => {
  return (
    <div>
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
      </div>
      <div className={"memberInform"}>
        <p>通知</p>
        <InformContent />
        <InformContent />
        <InformContent />
      </div>
      <div className={"adviseMission"}>
        <p>審核任務</p>
        <MissionContent />
      </div>
      <div className={"missionBtn"}>
        <button>我要審核去</button>
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
    <div className={"missionContent"}>
      <p>
        12/1開始，超商、公共場所都要戴口罩，好多人因沒戴口罩，警察於某超商門口開罰單~3000元
      </p>
    </div>
  );
};

const VoteContent = () => {
  return (
    <div className={"voteContainer"}>
      <p>您在「因原物料做口罩，衛生紙將成為下一波缺貨物資」一文中投下了支持</p>
      <p>12-15 21:30</p>
    </div>
  );
};



// const AuthorRight = () => {
//     console.log('AuthorRight');
//     return (
//         <div>
//             <div className={'memberTable'}>
//                 <p>發文者</p>

//                 <div className={'memberPost'}>
//                     <p>已提交新聞數</p>
//                     <p>128</p>
//                 </div>

//             </div>
//             <div className={'memberInform'}>
//                 <p>投票紀錄</p>
//                 <VoteContent />
//                 <VoteContent />
//                 <VoteContent />
//             </div>
//             <div className={'missionBtn'}>
//                 <button>我要上傳最新消息</button>
//             </div>

//         </div>
//     );
// };

export { MemberCard, ReviewerRight, VistorRight, MemberInformation };
