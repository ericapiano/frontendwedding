import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registry from "./Pages/Registry";
import Navbar from "./Components/Navbar";
import AboutCouple from "./Pages/AboutCouple";
import Homepage from "./Pages/Home";
import RSVP from "./Pages/RSVP";
import Events from "./Pages/Events";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about-couple" component={AboutCouple} />
        <Route exact path="/about-party" component={AboutCouple} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/rsvp" component={RSVP} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/login" component={Login} />

        {/* <Route exact path="/accomodations" component={Accomodations} /> */}
      </div>
    </Router>
  );
};

export default App;
// note
