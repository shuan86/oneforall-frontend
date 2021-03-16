import React, { useState } from 'react';
import '../../public/css/common.css';
import '../../public/css/RankingTable.css';
import RankingItem from './RankingItem';

const RankingTable = () => {
    const [memberFlag, setMemberFlag] = useState({ flag: false, id: 0 })
    console.log('RankingTable');

    return (
        <div className={'rankingTable'}>
            <h2>積分榜</h2>
            <div className={'rankingItemListTitle'}>
                <span className={'rankingName'}>名稱</span>
                <span className={'rankingScore'}>分數</span>
                <span className={'rankingSequence'}>排序</span>
            </div>
            <RankingItem memberFlag={memberFlag} setMemberFlag={setMemberFlag} memberName={"Cesario"} exp={105} rank={1} id={1} />
            <RankingItem memberFlag={memberFlag} setMemberFlag={setMemberFlag} memberName={"Albert"} exp={102} rank={2} id={2} />
            <RankingItem memberFlag={memberFlag} setMemberFlag={setMemberFlag} memberName={"danny"} exp={99} rank={3} id={3} />
        </div>
    )
};

export default RankingTable;
