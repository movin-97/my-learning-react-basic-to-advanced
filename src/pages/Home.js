import React from "react";
import HocCard from "../component/Card";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">HOC</h1>
      <div className="row m-auto">
        <HocCard />
      </div>
    </div>
  );
};

export default Home;
