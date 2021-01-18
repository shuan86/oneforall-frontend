import React from 'react';
import './css/common.css';
import './css/RankingTable.css';
import RankingItem from './RankingItem';

const RankingTable = () => (


    <div className={'rankingTable'}>
        <h2>
            積分榜
        </h2>
        <div className={'rankingItem'}>
            <span className={'rankingName'}>名稱</span>
            <span className={'rankingScore'}>分數</span>
            <span className={'rankingSequence'}>排序</span>

        </div>
        <RankingItem />
        <RankingItem />
    </div>
);

export default RankingTable;
