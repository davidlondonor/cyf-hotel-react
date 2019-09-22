import React from "react";
import Search from "./Search.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};

const Bookings = ({ children }) => {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {children}
      </div>
    </div>
  );
};

export default Bookings;
