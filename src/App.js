import React, { Component } from 'react';
// import logo from './logo.svg';
// import HomePage from './views/HomePage/HomePage';
import MemberPage from './views/MemberPage/MemberPage';

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
                <MemberPage />
            </div>
        );
    }
}

export default App;
