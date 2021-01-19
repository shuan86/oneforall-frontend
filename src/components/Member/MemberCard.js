import React from 'react';
import './css/MemberCard.css';

const MemberContainer = () => {
    console.log('MemberContainer');

    return (
        <div className={'memberContainer'}>
            <MemberCard />
            <MemberScore />
        </div>
    );
};


const MemberCard = () => {
    console.log('MemberCard');
    return (<div>
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
        </div>
    </div>);
};

const MemberScore = () => {
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

export { MemberContainer };
