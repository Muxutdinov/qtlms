import React from "react";
import Action from "../components/Action";
import AutoPlay from "../components/Autoplay";
import Certificate from "../components/Certificate";
import Courses from "../components/Courses";
import Features from "../components/Features";
import SecondCaru from "../components/SecondCaru";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderLeng from "../components/HeaderLeng";
import Intro from "../components/Intro";
import Teachers from "../components/Teachers";

const Home = () => {
  return (
    <div>
        <Header />
        <HeaderLeng />
        <Intro />
        <SecondCaru />
        <Features />
        <Certificate />
        <Courses />
        <Action />
        <Teachers />
        <AutoPlay />
        <Footer />
    </div>
  );
};

export default Home;
