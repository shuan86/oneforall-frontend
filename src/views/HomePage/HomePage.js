import React, { useEffect } from 'react';
import Filter from '../../components/NewsCard/Filter';
import '../../public/css/HomePage.css';
import { NewsCardUnreviewed, NewsCardUnderReview, NewsCardReviewed } from '../../components/NewsCard/NewsCard';
import RankingTable from '../../components/NewsCard/RankingTable';
const NewsCard = ({ newsStatus }) => {
    <div className="NewsCard">
        <NewsCardUnreviewed />
        <NewsCardUnderReview />
        <NewsCardReviewed />
    </div>
}

const HomePage = () => {
    return (
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
        </div>)
};

export default HomePage;
