import React from "react";
/*
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";*/
import './App.css';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import LocalTunnel from "./LocalTunnel";
import RemoteTunnel from "./RemoteTunnel";
import ListTunnels from "./ListTunnels";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/localTunnel" component={LocalTunnel} />
      <Route exact path="/remoteTunnel" component={RemoteTunnel} />
      <Route exact path="/listTunnels" component={ListTunnels} />
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
