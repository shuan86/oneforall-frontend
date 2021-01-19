import React from 'react';
// import { MemberCard, InspectorRight, AudienceRight } from '../../components/Member/MemberCard';
import { MemberCard, InspectorRight } from '../../components/Member/MemberCard';
import NavBar from '../../components/Nav/NavBar';

const MemberPage = () => (
    <div>
        <NavBar />
        <div className="container">
            <MemberCard />
            <InspectorRight />
        </div>
    </div>
    );

export default MemberPage;
