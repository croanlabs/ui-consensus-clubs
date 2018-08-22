import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Polls from "./Components/Polls";
import Notifications from "./Components/Notifications";
import Rewards from "./Components/Rewards";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";

ReactDOM.render(
  <App />,
  //   <Router>
  //     <div>
  //       <Route path="/" component={NavBar} />
  //       <Route path="/home" component={App} />
  //       <Route path="/polls" component={Polls} />
  //       <Route path="/notifications" component={Notifications} />
  //       <Route path="/rewards" componemnt={Rewards} />
  //       <Route path="/profile" component={Profile} />
  //       <Route component={() => <p>This page does not exist!</p>} />
  //     </div>
  //   </Router>,
  document.getElementById("root")
);
registerServiceWorker();
