import React, { Component } from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Badge from "./Badge";
import { Button } from "react-bootstrap";
import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults.jsx";
import Moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <Bookings>
          {" "}
          <SearchResults informacion={FakeBookings} />{" "}
        </Bookings>
        <Footer />
        <Badge
          firstName="David"
          lastName="Londoño"
          jobTitle="Dev"
          twitter="davidlucky"
        />
      </div>
    );
  }
}
