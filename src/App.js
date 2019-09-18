import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Badge from "./Badge";
import SearchResult from "./SearchResults";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <SearchResult />
      <Bookings />
      <Footer />
      <Badge
        firstName="David"
        lastName="Londoño"
        jobTitle="Dev"
        twitter="davidlucky"
      />
    </div>
  );
};

export default App;
