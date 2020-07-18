import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./component/Form";
import List from "./component/List";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";
import config from "./Config";
import Confirm from "./component/ConfirmCode";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavItem } from "react-bootstrap";

function App() {
  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
    API: {
      endPoints: [
        {
          name: "test",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION,
        },
      ],
    },
  });

  async function handleLogout() {
    await Auth.signOut();
    localStorage.removeItem("token");
  }

  return (
    <div>
      <header className="App-header">
        <Router>
          <Nav variant="pills">
            <LinkContainer to="/">
              <NavItem>Main</NavItem>
            </LinkContainer>
            <LinkContainer to="/branch">
              <NavItem>Branch</NavItem>
            </LinkContainer>
            <LinkContainer to="/add">
              <NavItem>Add</NavItem>
            </LinkContainer>
            <LinkContainer to="/signin">
              <NavItem>SignIn</NavItem>
            </LinkContainer>
            <LinkContainer to="/signup">
              <NavItem>SignUp</NavItem>
            </LinkContainer>
            <LinkContainer to="/confirm">
              <NavItem>Confirm</NavItem>
            </LinkContainer>
            <button onClick={handleLogout}>SignOut</button>
          </Nav>
          <Route exact path="/branch" component={List} />
          <Route path="/add" component={Form} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/confirm" component={Confirm} />
        </Router>
      </header>
    </div>
  );
}

export default App;
