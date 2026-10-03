
import Image from "next/image";
import start_icon from "@/assets/img/services/shape/services-shape-3.png";

interface DataType {
  expreience_data: {
      id: number;
      date: string;
      title: string;
      company: string;
  }[];

}

const expreience_content: DataType = {
  expreience_data: [
    {
      id: 1,
      date: "Jan 2026 - Present",
      title: "Senior Software Engineer",
      company: "Agroventures",
    },
    {
      id: 2,
      date: "March 2026- Current",
      title: "Senior Software Engineer",
      company: "Neon Labz",
    },
    {
      id: 3,
      date: "May 2025 - Current",
      title: "Lecturer",
      company: "Skyup Campus",
    },
    {
      id: 4,
      date: "May 2023 - May 2025",
      title: "Software Engineer",
      company: "May 2023 - May 2025",
    },
   

  ],
 
}
const { expreience_data} = expreience_content


const ExperienceAreaHomeTwo = () => {
  return (
    <>
      <section className="section" id="experience">
        <div className="tp-hero-2__bg tp-hero-2__space-5 d-flex align-items-start justify-content-center z-index-1 p-relative fix">
          <div className="tp-hero-distort-2" style={{ backgroundImage: 'url(/assets/img/hero/hero-2-overlay.png)' }}></div>
          <div className="tp-hero-2__boder-circle tp-hero-2__boder-circle-tr">
            <span></span>
          </div>
          <div className="tp-hero-2__circle-wrapper tp-hero-2__circle-pos">
            <span className="tp-hero-2__circle-1"></span>
            <span className="tp-hero-2__circle-2"></span>
            <span className="tp-hero-2__circle-3"></span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                   <div className="tp-section-title-wrapper mb-40 text-start">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">Working</span>
                    <h3 className="tp-section-title">Experiences</h3>
                  </div>
                </div>
                <div className="tp-hero-2__design-exp-wrap">
                  <ul>
                    {expreience_data.map((item, index) => (
                      <li key={index}>
                        <div className="tp-hero-2__design-exp-item d-flex align-items-center justify-content-between">
                          <div className="tp-hero-2__design-exp-meta d-flex align-items-center">
                            <span>{item.date}</span>
                            <h4 className="tp-hero-2__design-exp-title">{item.title}</h4>
                          </div>
                          <div className="tp-hero-2__design-exp-company align-items-center d-flex justify-content-center">
                            <span>{item.company}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceAreaHomeTwo;