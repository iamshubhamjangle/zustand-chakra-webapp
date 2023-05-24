import React from "react";
import CounterCard from "../Counter/CounterCard";
import UserCard from "../User/UserCard";
import CallToAction from "./CTA";

const Home = () => {
  return (
    <>
      <CallToAction />
      <CounterCard />
      <UserCard />
    </>
  );
};

export default Home;
