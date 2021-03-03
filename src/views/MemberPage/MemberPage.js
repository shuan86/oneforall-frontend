import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { MemberCard, VistorRight, ReviewerRight } from '../../components/Member/MemberCard';
import { IMemberStatus } from "../../modules/member";

const MemberPage = () => {
    const [memberStatus, setMemberStatus] = useState(IMemberStatus.vistor)
    useEffect(() => {

        return () => {

        }
    }, [])


    useEffect(() => {
        if (memberStatus == IMemberStatus.vistor) {

        }
        else if (memberStatus == IMemberStatus.reviewer) {


        }
        else if (memberStatus == IMemberStatus.publisher) {

        }

        return () => {
        }
    }, [memberStatus])
    const onClickChangeMember = (status) => {
        setMemberStatus(status)
    }
    const isReviewer = useSelector(state => state.memberStatus.isReviewer)
    const isPublisher = useSelector(state => state.memberStatus.isPublisher)
    console.log('isReviewer:', isReviewer);
    return (
        < div className="container" >
            <button onClick={() => onClickChangeMember(IMemberStatus.vistor)}>觀看者</button>
            {isReviewer ? null : <button onClick={() => onClickChangeMember(IMemberStatus.reviewer)}>審查者</button>}
            {isPublisher ? null : <button onClick={() => onClickChangeMember(IMemberStatus.publisher)}>發文者</button>}

            <div className="memberContainer">
                <MemberCard />
                {memberStatus == IMemberStatus.vistor ? <VistorRight /> : null}
                {memberStatus == IMemberStatus.reviewer ? <ReviewerRight /> : null}
                {memberStatus == IMemberStatus.publisher ? <ReviewerRight /> : null}

            </div>
        </div >
    )

}





export default MemberPage;
