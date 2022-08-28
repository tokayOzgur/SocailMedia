import React from "react";
import LanguageSelector from '../components/LanguageSelector';
import UserSingupPage from '../pages/UserSingupPage';
import LoginPage from '../pages/LoginPage';
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import TopBar from "../components/TopBar";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    let { isLoggedIn } = this.props;
    return (
      <div>
        <Router >
          <TopBar />
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            {!isLoggedIn && (<Route path={"/login"} component={LoginPage} />)}
            <Route path={"/singup"} component={UserSingupPage} />
            <Route path={"/user/:username"} component={UserPage} />
            <Redirect to={"/"} />
          </Switch>
        </Router>
        <LanguageSelector />
      </div>
    );
  }

}
let mapStoreProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn,
  };
};

export default connect(mapStoreProps)(App);
