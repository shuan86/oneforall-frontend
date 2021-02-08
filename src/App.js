import React from "react";
import {
  Link,
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Nav/NavBar";
import HomePage from "./views/HomePage/HomePage";
import MemberPage from "./views/MemberPage/MemberPage";
import EnrollPage from "./views/EnrollPage/EnrollPage";
import LoginPage from "./views/LoginPage/LoginPage";

const App = () => (
  <HashRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/member" component={MemberPage} />
        <Route path="/enroll" component={EnrollPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
