import React from "react";
import Card from "./components/Card";

const Home = ({ socket }) => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <Card socket={socket} />
    </div>
  );
};

export default Home;
