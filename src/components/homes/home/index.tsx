"use client";
import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHome from "./HeroAreaHome";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import MarqueeAreaHomeOne from "./MarqueeAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import SkillAreaHomeOne from "./SkillAreaHomeOne";
import AwardAreaHomeOne from "./AwardAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo";
import ExperienceAreaHomeTwo from "./ExperienceAreaHomeTwo";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <div
        id="smooth-wrapper"
        className="tp-page-wrapper theme-bg"
        style={{ backgroundImage: `url(/assets/img/bg/distort-bg.png)` }}
      >
        <div id="smooth-content">
          <main>
            <HeroAreaHome />
            <MarqueeAreaHomeOne />
            <AboutAreaHomeOne />
            <ServiceAreaHomeOne />
            <ExperienceAreaHomeTwo />
            <TestimonialAreaHomeTwo />
            <AwardAreaHomeOne style_2={false} />
            <SkillAreaHomeOne />      
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
