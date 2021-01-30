import React from 'react';
import Filter from '../../components/NewsCard/Filter';
import '../../public/css/HomePage.css';
import { NewsCardUnreviewed, NewsCardUnderReview, NewsCardReviewed } from '../../components/NewsCard/NewsCard';
import NavBar from '../../components/Nav/NavBar';
import RankingTable from '../../components/NewsCard/RankingTable';

const HomePage = () => (
    <div>

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
