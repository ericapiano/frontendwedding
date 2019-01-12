import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Components/Pages/homepage";
import Registry from "./Components/Pages/registry";
import RSVP from "./Components/Pages/rsvp";
import Events from "./Components/Pages/events";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/rsvp" component={RSVP} />
        <Route exact path="/registry" component={Registry} />
      </div>
    </Router>
  );
};

export default App;
