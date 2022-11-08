import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main"
import Orders from "./pages/Orders"
import Pickups from "./pages/Pickups"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/pickups" element={<Pickups />} />
        </Routes>
      </Router>
    );
  }
}