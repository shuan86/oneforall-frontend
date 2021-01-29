import React from 'react';
// import { MemberCard, InspectorRight, AudienceRight } from '../../components/Member/MemberCard';
import { MemberCard, InspectorRight } from '../../components/Member/MemberCard';
import NavBar from '../../components/Nav/NavBar';

const MemberPage = () => (
    <div>
        <NavBar />
        <div className="container">
            <div className="memberContainer">
                <MemberCard />
                <InspectorRight />
            </div>
        </div>
    </div>
    );

export default MemberPage;
