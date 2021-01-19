import React from 'react';
import Filter from './Filter';
import './css/HomePage.css';
import { NewsCardUnreviewed, NewsCardUnderReview, NewsCardReviewed } from './NewsCard';
import NavBar from './NavBar';
import RankingTable from './RankingTable';

const HomePage = () => (
    <div>
        <NavBar />
        <Filter />
        <div className="container">
            <div className="homePageContent">
                <div className="NewsCard">
                    <NewsCardUnreviewed />
                    <NewsCardUnderReview />
                    <NewsCardReviewed />
                </div>
                <div className="Ranking">
                    <RankingTable />
                </div>
            </div>
        </div>
    </div>
    );

export default HomePage;
