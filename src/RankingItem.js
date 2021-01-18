import React from 'react';
import './css/common.css';
import './css/RankingItem.css';

const RankingItem = () => (
    <div>
        <div className={'rankingPosition'}>
            <div className={'rankAccount'}>
                <img src="favicon.ico" alt="rankAccount" width={'20px'} />
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
