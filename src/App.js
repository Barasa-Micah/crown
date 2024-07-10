import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

function App() {
  return (
   <Router>
    <div className="App">
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/">
        <LoginPage />
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
