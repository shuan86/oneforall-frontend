import React from 'react';
import Filter from './Filter';
import './css/HomePage.css';
import { NewsCardUnreviewed, NewsCardUnderReview, NewsCardReviewed } from './NewsCard';

const Homepage = () => (
    <div>
        <Filter />
        <div className="container">
            <NewsCardUnreviewed />
            <NewsCardUnderReview />
            <NewsCardReviewed />
        </div>
    </div>
    );

export default Homepage;
