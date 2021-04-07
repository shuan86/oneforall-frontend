import React from "react";
import {
  Link,
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Nav/NavBar";
import HomePage from "./views/HomePage/HomePage";
import MemberPage from "./views/MemberPage/MemberPage";
import PublisherPage from "./views/PublisherPage/PublisherPage";
import ReviewerPage from "./views/ReviewerPage/ReviewerPage";
import PixelGamePage from "./views/PixelGamePage/PixelGamePage";

import EnrollPage from "./views/EnrollPage/EnrollPage";
import LoginPage from "./views/LoginPage/LoginPage";
import SmartContractPage from "./views/RootPage/SmartContactPage";
import RootPublisherPage from "./views/RootPage/RootPublisherPage";
import RootReviewerPage from "./views/RootPage/RootReviewerPage";
import ArticlePage from "./views/ArticlePage/ArticlePage";

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/articlePage/:articleId" component={ArticlePage} />

          <Route path="/pixelGame" component={PixelGamePage} />
          <Route path="/publisher" component={PublisherPage} />
          <Route path="/reviewer" component={ReviewerPage} />
          <Route path="/member" component={MemberPage} />
          <Route path="/enroll" component={EnrollPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/smartcontract" component={SmartContractPage} />
          <Route path="/root/publisher" component={RootPublisherPage} />
          <Route path="/root/reviewer" component={RootReviewerPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

export default App;
