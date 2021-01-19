import React from 'react';
import '../../public/css/MemberCard.css';

const MemberContainer = () => {
    console.log('MemberContainer');

    return (
        <div className={'memberContainer'}>
            <MemberCard />
            <InspectorRight />
            <AudienceRight />
            {/* <AuthorRight /> */}
        </div>
    );
};


const MemberCard = () => {
    console.log('MemberCard');
    return (
        <div className={'personalInfo'}>
            <div className={'personalPhoto'}>
                <img src="favicon.ico" alt="" />
            </div>
            <div className={'infoContent'}>
                <p>使用者名稱</p>
                <p>亞拉岡</p>
                <p>電子信箱</p>
                <p>a123a123@gamil.com</p>
                <p>手機號碼</p>
                <p>09122344566</p>
                <p>平台名稱</p>
                <p>猴子香蕉報社</p>
                <p>錢包地址</p>
                <p>***********</p>
            </div>

        </div>);
};

const InspectorRight = () => {
    console.log('memberTable');
    return (
        <div>
            <div className={'memberTable'}>
                <p>審核者</p>
                <div className={'tablePosition'}>
                    <div className={'memberScore'}>
                        <p>積分</p>
                        <p>1283</p>
                    </div>

                    <div className={'memberFollower'}>
                        <p>追蹤</p>
                        <p>83</p>
                    </div>
                </div>
            </div>
            <div className={'memberInform'}>
                <p>通知</p>
                <InformContent />
                <InformContent />
                <InformContent />
            </div>
            <div className={'adviseMission'}>
                <p>審核任務</p>
                <MissionContent />
            </div>
            <div className={'missionBtn'}>
                <button>我要審核去</button>
            </div>

        </div>
    );
};

const InformContent = () => {
    console.log('InformContent');
    return (
        <div className={'informContainer'}>
            <p>因為成功證實「因原物料做口罩，衛生紙將成為下一波缺貨物資」獲得了0.1 ETH，謝謝你為了真實消息的付出</p>
            <p>12-15 21:30</p>
        </div>
    );
};

const MissionContent = () => {
    console.log('missionContent');
    return (
        <div className={'missionContent'}>
            <p>12/1開始，超商、公共場所都要戴口罩，好多人因沒戴口罩，警察於某超商門口開罰單~3000元</p>
        </div>
    );
};

const VoteContent = () => {
    console.log('VoteContent');
    return (
        <div className={'voteContainer'}>
            <p>您在「因原物料做口罩，衛生紙將成為下一波缺貨物資」一文中投下了支持</p>
            <p>12-15 21:30</p>
        </div>
    );
};


const AudienceRight = () => {
    console.log('AudienceRight');
    return (
        <div>
            <div className={'memberTable'}>
                <p>觀看者</p>
                <div className={'tablePosition'}>
                    <div className={'memberScore'}>
                        <p>積分</p>
                        <p>1283</p>
                    </div>

                    <div className={'memberFollower'}>
                        <p>已追蹤</p>
                        <p>83</p>
                    </div>
                </div>
            </div>
            <div className={'memberInform'}>
                <p>投票紀錄</p>
                <VoteContent />
                <VoteContent />
                <VoteContent />
            </div>
            <div className={'missionBtn'}>
                <button>我想成為審核者</button>
            </div>
            <div className={'missionBtn'}>
                <button>我想成為發文者</button>
            </div>
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


export { MemberContainer, MemberCard, InspectorRight, AudienceRight };
