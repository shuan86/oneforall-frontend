import React from 'react';
import './css/common.css';
import './css/RankingItem.css';
import inspector from './public/images/inspector.jpg';

const RankingItem = () => (
    <div>
        <div className={'rankingPosition'}>
            <div className={'rankAccount'}>
                <img src={inspector} alt="rankAccount" width={'20px'} />
                <span>a8263819</span>
            </div>
            <div className={'rankScore'}>
                <span>17273</span>
            </div>
            <div className={'rankSequence'}>
                <span>#1</span>
            </div>
        </div>
    </div>
);

export default RankingItem;
