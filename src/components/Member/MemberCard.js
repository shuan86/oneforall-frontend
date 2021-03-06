import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../public/css/MemberCard.css";
import ApplyReviewerDialog from "./ApplyReviewerDialog";
import ApplyPublisherDialog from "./ApplyPublisherDialog";
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
const MemberContainer = () => {
  return (
    <div className={"memberContainer"}>
      <MemberCard />
      <ReviewerRight />
      <VistorRight />
      {/* <AuthorRight /> */}
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

const VistorRight = () => {
  console.log("AudienceRight");
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

      <ApplyReviewerDialog />
      <ApplyPublisherDialog />
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

export { MemberContainer, MemberCard, ReviewerRight, VistorRight };
