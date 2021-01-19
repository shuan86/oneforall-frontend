import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { NewsCardUnreviewed, NewsCardUnderReview, NewsCardReviewed } from './NewsCard';
import NavBar from './NavBar';
// import RankingTable from './RankingTable';
import { MemberContainer } from './MemberCard';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            // <div className="">
            //     <div className="App-header">
            //         {/* <img src={logo} className="App-logo" alt="logo" />
            //         <h2>Welcome to React</h2> */}
            //     </div>
            //     <NewsCard />
            //     {/* <p>{ this.state.loading.toString() }</p>
            //     <p className="App-intro">
            //         To get started, edit <code>src/App.js</code> and save to reload.
            //     </p> */}
            // </div>
            <div>
                <NavBar />
                <MemberContainer />
                {/* <RankingTable /> */}
                {/* <NewsCardUnreviewed />
                <NewsCardUnderReview />
                <NewsCardReviewed /> */}
            </div>
        );
    }
}

export default App;
