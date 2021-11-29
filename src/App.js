import React from "react";
import "./App.css"
import Action from "./components/Action";
import AutoPlay from "./components/Autoplay";
import Certificate from "./components/Certificate";
import Courses from "./components/Courses";
import Features from "./components/Features";
import SecondCaru from "./components/SecondCaru";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderLeng from "./components/HeaderLeng";
import Intro from "./components/Intro";
import Learners from "./components/Learners";
import Teachers from "./components/Teachers";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeaderLeng />
      <Intro />
      <SecondCaru />
      {/* <Learners /> */}
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

export default App;

// git remote set-url origin https://Muxutdinov:<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>@github.com/Muxutdinov/qtlms.git
