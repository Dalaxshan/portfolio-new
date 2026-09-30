"use client";
import React, { useState } from "react";
import Image from "next/image";

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: React.JSX.Element;
  accordion_data: {
    id: number;
    tab_id: string;
    question: string;
    answer: string;
    some_features: string[];
  }[];
}

const service_content: DataType = {
  subtitle: "Services",
  title: (
    <>
      What I Can <br /> Do for you.
    </>
  ),
  sm_des: (
    <>
      I create modern, scalable, and user-focused digital solutions that, turn
      ideas into impactful web applications and experiences.
    </>
  ),
  accordion_data: [
    {
      id: 1,
      tab_id: "One",
      question: "Frontend Development",
      answer:
        "I build modern, responsive, and interactive user interfaces with a strong focus on performance, usability, and clean design.",
      some_features: [
        "React.js / Next.js",
        "Svelte /  Wordpress",
        "HTML / CSS / Tailwind CSS",
        "MUI / Ant Design",
      ],
    },
    {
      id: 2,
      tab_id: "Two",
      question: "Backend Development",
      answer:
        "I develop secure and scalable backend systems, APIs, and database solutions that power reliable web applications.",
      some_features: [
        "Node.js / NestJS",
        "Java / Spring Boot",
        "Python / Flask",
        "MongoDB / MySQL",
      ],
    },
    {
      id: 3,
      tab_id: "Three",
      question: "Cloud & DevOps",
      answer:
        "I deploy and maintain web applications using modern cloud platforms, deployment tools, and server technologies.",
      some_features: [
        "AWS",
        "Cloudflare / Hostinger",
        "Vercel / Render",
        "Nginx / CI/CD",
      ],
    },
    {
      id: 4,
      tab_id: "Four",
      question: "Teaching & Mentoring",
      answer:
        "As a Lecturer, I share practical web development knowledge and guide students through hands-on projects and modern development practices.",
      some_features: [
        "WordPress Development",
        "HTML / CSS / JavaScript",
        "Elementor / WooCommerce",
        "Practical Project Guidance",
      ],
    },
  ],
};

const { subtitle, title, sm_des, accordion_data } = service_content;

const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

  const handleItemClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <section
        className="tp-services-area tp-sv tp-services-bg-text-animation fix"
        id="tp-sv"
      >
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">
            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0">
              <div className="col-xl-6 col-lg-7">
                <div
                  className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-30"
                  style={{ paddingTop: "100px" }}
                  data-tp-throwable-scene="true"
                >
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">
                        {title}
                      </h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#00CC97" }}
                      >
                        Next js
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FF759C" }}
                      >
                        Nest js
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                        React js
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                        Python
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#00CC97" }}
                      >
                        AWS
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                        Hostinger
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#00CC97" }}
                      >
                        MongoDB
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#19B3F1" }}
                      >
                        MySQL
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FF759C" }}
                      >
                        PostgreSQL
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                       Prisma
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="brand-img" />
                      </span>
                    </p>
                     <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FF759C" }}
                      >
                        Tailwind CSS
                      </span>
                    </p>
                      <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#19B3F1" }}
                      >
                        Wordpress
                      </span>
                    </p>

                      <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#19B3F1" }}
                      >
                        Cpanel
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div
                  className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative"
                  style={{ marginTop: "90px" }}
                >
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">
                    {accordion_data.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => handleItemClick(i)}
                        className={`accordion-item tp-services-accordion-item ${active === i ? "active" : ""}`}
                      >
                        <h2
                          className="accordion-header"
                          id={`heading${item.tab_id}`}
                        >
                          <button
                            className={`accordion-button ${i === 1 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? "true" : "false"}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            <span>0{item.id}</span>
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;
