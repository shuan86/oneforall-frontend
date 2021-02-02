import React from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav/NavBar';
import HomePage from './views/HomePage/HomePage';
import MemberPage from './views/MemberPage/MemberPage';
import EnrollPage from './views/EnrollPage/EnrollPage'

const App = () => (


    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/member" component={MemberPage} />
                <Route path="/enroll" component={EnrollPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    </BrowserRouter>

);


export default App;
