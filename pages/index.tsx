import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutUs from "./components/aboutus/AboutUs";
import FeaturedWork from "./components/featured/FeaturedWork";
import Hero from "./components/hero/Hero";
import Nav from "./components/Nav";
import Projects from "./components/projects/Projects";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Hero />
      <Projects />
      <AboutUs />
      {/* <FeaturedWork /> */}
    </div>
  );
};

export default Home;
