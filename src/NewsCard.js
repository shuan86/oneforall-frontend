import React from 'react';
import './css/NewsCard.css';
import author from './public/images/author.jpg';
import audience from './public/images/audience.jpg';
import history from './public/images/HistoryIcon.svg';
import articleImg from './public/images/articleImg.jpg';

const NewsCardContent = ({ status }) => {
    console.log('NewsCardContent');
    return (
        <div className="content">
            <div className="post-info">
                <div className="user-info">
                    <img src={author} alt="Background" className="user-photo" />
                    <div className="article-data">
                        <div className="user-id">abc12345678</div>
                        <div className="article-time">2020-11-06 21:24:08</div>
                    </div>
                </div>
                <a href="" className={status ? 'none' : 'history'}>
                    <img src={history} alt="History" />
                </a>
            </div>
            <div className="hashtag">
                <a href=""># 醫療</a>
                <a href=""># 疫苗</a>
            </div>
            <div className="article">
                <h3>這應該大概有十個字吧還是應該要再多一點字呢呢呢呢呢呢呢</h3>
                <p>中央流行疫情指揮中心日前宣布秋冬專案，要求本國人比照外國人，出具三日內檢驗陰性證明才能登機返國，引起反彈。指揮中心今公布三種例外情況，但若不符合例外情況</p>
                <img src={articleImg} alt="" />
                <a href="">繼續閱讀</a>
            </div>
            <div className="like">
                <div>
                    <a href="">想知道</a>
                    <span>123人想知道</span>
                </div>
                <div className={status ? 'none' : 'vote'}>
                    <a href="">同意</a>
                    <a href="">反對</a>
                </div>
            </div>
        </div>
    );
};

const NewsCardComment = () => {
    console.log('NewsCardComment');
    return (
        <div className="comment">
            <div className="user-input">
                <img src={audience} alt="Background" className="user-photo" />
                <input type="text" placeholder="告訴我們你的想法" />
                <a href="">傳送</a>
            </div>
            <div className="user-comment">
                <img src={audience} alt="Background" className="user-photo" />
                <span>
                    <div className="user-id">abc12345678</div>
                    <p>大問號？！！！</p>
                </span>
                <p>20min</p>
            </div>
            <a href="">查看其他留言</a>
        </div>
    );
};

const NewsCard = ({ status }) => {
    console.log('NewsCard');
    console.log('NewsCardUnreviewed', status);
    return (
        <div className="card">
            <div className={status ? 'status' : 'none'}>未審核</div>
            <NewsCardContent status={status} />
            <NewsCardComment />
        </div>
    );
};

const NewsCardUnreviewed = () => {
    console.log('NewsCard');
    console.log('NewsCardUnreviewed', status);
    return (
        <NewsCard status />
    );
};
const NewsCardUnderReview = () => {
    console.log('NewsCard');
    return (
        <div className="card">
            <div className="status">審核中</div>
            {/* <h1>NewsCard</h1> */}
            <NewsCardContent />
            <NewsCard status={false} />
            <NewsCardComment />
        </div>
    );
};
const NewsCardReviewed = () => {
    console.log('NewsCard');
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

export { NewsCardUnreviewed, NewsCardUnderReview, NewsCardReviewed };
