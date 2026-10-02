"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import AwardUpArrowIcon from "@/svg/home/AwardIcons/AwardUpArrowIcon";
import AwardLeftArrowIcon from "@/svg/home/AwardIcons/AwardLeftArrowIcon";
import award_start from "@/assets/img/award/shape/award-shape-1.png";
import UseHoverReveal from "@/hooks/UseHoverReveal";

interface DataType {
  subtitle: string;
  title: string;
  award_data: {
    id: number;
    img: string;
    company: string;
    date: string;
  }[];
}

const award_content: DataType = {
  subtitle: "Certificates",
  title: "Certificates",
  award_data: [
   {
      id: 1,
      img: "https://pub-b37b7ce1e3ce4a7da76f4c10ac2aecf7.r2.dev/research-2.png",
      company: "Research - AI and Deep Learning",
      date: "ICHORA - 2024",
    },
    {
      id: 2,
      img: "https://pub-b37b7ce1e3ce4a7da76f4c10ac2aecf7.r2.dev/NOVITEC%20Certificate.webp",
      company: "Master Class in AI",
      date: "NOVI TECH - 2025",
    },
    
      {
      id: 3,
      img: "https://pub-b37b7ce1e3ce4a7da76f4c10ac2aecf7.r2.dev/hp2.png",
      company: "AI for Business Professionals",
      date: "HP - 2025",
    },
    {
      id: 4,
      img: "https://pub-b37b7ce1e3ce4a7da76f4c10ac2aecf7.r2.dev/mongo-2.png",
      company: "Micrsoservices Architecture ",
      date: "ALISION - 2024",
    },
    {
      id: 5,
      img: "https://pub-b37b7ce1e3ce4a7da76f4c10ac2aecf7.r2.dev/wordpress-2.png",
      company: "Wordpress Development",
      date: "COURSERA - 2023",
    },
   
  ],
};

const { subtitle, title, award_data } = award_content;

const AwardAreaHomeOne = ({ style_2 }: { style_2?: boolean }) => {
  const { handleMouseMove } = UseHoverReveal();
  const bg_img = style_2 ? null : "/assets/img/bg/distort-bg.png";

  return (
    <>
      <section
        id="certificates"
        style={{ backgroundImage: `url(${bg_img})` }}
        className={`tp-award-area pt-120 ${style_2 ? "tp-award-customize black-bg-3 pb-50" : "theme-bg pb-120 tp-bg-light p-relative"}`}
      >
        <div className="container">
          <div
            className={`tp-award-inner pb-80 ${style_2 ? "" : "p-relative"}`}
          >
            {style_2 ? null : <span className="tp-award-bottom-border"></span>}
            <div className="row">
              <div className="col-xl-5">
                <div className="tp-award-wrapper">
                  <div className="tp-section-title-wrapper mb-30">
                    <div
                      className={`tp-section-title-inner p-relative ${style_2 ? "" : "tp_title_anim"}`}
                    >
                      {style_2 ? null : (
                        <span className="tp-section-subtitle tp-award-subtitle">
                     Archived
                        </span>
                      )}
                      <h3
                        className={`tp-section-title ${style_2 ? "tp_title_anim" : ""}`}
                      >
                        {title}
                      </h3>
                    </div>
                  </div>
                  <div className="tp-award-text-wrapper p-relative">
                    <h3
                      className="tp-award-text-outline d-none d-xl-block"
                      data-speed="1.1"
                      data-lag="0.1"
                    >
                      {subtitle}
                    </h3>
                  
                    <div className="tp-award-shape">
                      <Image
                        className="tp-award-shape-1"
                        data-speed="1"
                        data-lag="0.1"
                        src={award_start}
                        alt="diego"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="tp-award-item-wrapper pt-35 pl-70">
                  {award_data.map((award) => (
                    <div
                      key={award.id}
                      className="tp-award-item p-relative tp-hover-reveal-item"
                      onMouseMove={(event) =>
                        handleMouseMove(event, ".tp-hover-reveal-item")
                      }
                    >
                        <div className="tp-award-item-inner d-flex align-items-center justify-content-between flex-wrap">
                          <div className="tp-award-arrow">
                            <AwardLeftArrowIcon />
                          </div>
                          <div className="tp-award-content">
                            <h3 className="tp-award-title">{award.company}</h3>
                            <p>{award.date}</p>
                          </div>
                          <div className="tp-award-btn-wrapper">
                            <span className="tp-award-btn">
                              <span>
                                <AwardUpArrowIcon />
                                <AwardUpArrowIcon />
                              </span>
                            </span>
                          </div>
                        </div>
                      <div
                        className="tp-hover-reveal-bg"
                        style={{ backgroundImage: `url(${award.img})` }}
                      ></div>
                      <span className="tp-award-inner-border"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardAreaHomeOne;
