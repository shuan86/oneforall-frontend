import React,{useState} from 'react';
import '../../public/css/common.css';
import '../../public/css/RankingTable.css';
import RankingItem from './RankingItem';

const RankingTable = () => {
    const [memberFlag, setMemberFlag] = useState({flag:false,id:0})
    console.log('RankingTable');
    
    return(
        <div className={'rankingTable'}>
        <h2>積分榜</h2>
        <div className={'rankingItemListTitle'}>
            <span className={'rankingName'}>名稱</span>
            <span className={'rankingScore'}>分數</span>
            <span className={'rankingSequence'}>排序</span>
        </div>
        <RankingItem memberFlag={memberFlag} setMemberFlag={setMemberFlag} id={1} />
        <RankingItem memberFlag={memberFlag} setMemberFlag={setMemberFlag} id={2}/>
        <RankingItem memberFlag={memberFlag} setMemberFlag={setMemberFlag} id={3}/>
    </div>
    )
};

export default RankingTable;
