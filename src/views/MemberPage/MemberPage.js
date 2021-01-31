import React from 'react';
// import { MemberCard, InspectorRight, AudienceRight } from '../../components/Member/MemberCard';
import { MemberCard, InspectorRight } from '../../components/Member/MemberCard';


const MemberPage = () => (

    <div className="container">
        <div className="memberContainer">
            <MemberCard />
            <InspectorRight />
        </div>
    </div>

);

export default MemberPage;
