"use client";
import Image from "next/image";
import Navbar from "./_component/Layout/Navbar";
import HeroSection from "./_component/Home/HeroSection";
import BannerCTA from "./_component/Home/BannerCTA";
import { CallToAction } from "./_component/Home/CallToAction";
import { Feature } from "./_component/Home/Feature";
import FeatureThree from "./_component/Home/FeatureThree";
import FeatureProduct from "./_component/Home/FeatureProduct";
import FeatureProduct2 from "./_component/Home/FeatureProduct2";
import About from "./_component/Home/About";
import CaseStudy from "./_component/Home/CaseStudy";
import Blog from "./_component/Home/Blog";
import Divider from "./_component/Divider";
import Contact from "./_component/Home/Contact";
import { useEffect } from "react";
import AOS from "aos";
export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <main className="flex min-h-screen py-22 bg-primary flex-col  items-center justify-between  bg-secondary">
      <Navbar className=" top-0 z-50 fixed  bg-opacity-100 backdrop-blur-lg" />
      <HeroSection />
      <BannerCTA className="my-24" />
      <FeatureThree
        description=" IoT-Enabled Displays for dynamic updates, Robotic Signage Solutions for interactive experiences, and insightful Analytics and Insights to optimize your strategy. Elevate your signage game and start your journey towards impactful digital displays with SignageBot.com today."
        title="Revolutionize Your Signage with SignageBot.com"
      />
      <About />
      <Feature />
      <FeatureProduct2 />
      <CaseStudy />
      <Divider />
      <Blog />
      <Divider />
      <Contact />
    </main>
  );
}
