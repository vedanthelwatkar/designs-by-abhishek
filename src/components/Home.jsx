import React from "react";
import Destination from "./Destination";
import ScrollingCities from "./ScrollingCities";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Destination />
      <ScrollingCities />
    </div>
  );
};

export default Home;
