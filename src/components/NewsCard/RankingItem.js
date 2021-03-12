import React,{useState,useEffect} from 'react';
import '../../public/css/common.css';
import '../../public/css/RankingItem.css';
import inspector from '../../public/images/inspector.jpg';
import {MemberInformation} from '../Member/MemberCard'

const RankingItem = ({memberFlag,setMemberFlag,id}) => {
        const [isOpen, setIsOpen] = useState(false)
        useEffect(() => {
            setIsOpen(pre=>{
                if(id!=memberFlag.id)return false;
                return pre;
            })
            if(id!=memberFlag.id){
                console.log(id,':close');
            }
        }, [memberFlag])
        const onClickSetRankingFlag = () => {
            setMemberFlag(pre=>{
             const data={flag:!pre.flag,id}
             console.log('click:',data);
             setIsOpen(data.flag)
             return data
            })
        }
        return (
        <div className="rankingItem">
            <a  href="#" className={'rankingPosition'} onClick={onClickSetRankingFlag}>
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
            </a>
            <div className={isOpen ? "rankingItemMemberInformation" : "none"}>
                <MemberInformation setMemberFlag={setMemberFlag}/>
            </div>
        </div>
        )
};

export default RankingItem;
