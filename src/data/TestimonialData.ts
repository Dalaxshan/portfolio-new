
import { StaticImageData } from 'next/image';
import testimonial_img_1 from '@/assets/img/portfolio/3/portfolio-1.webp';
import testimonial_img_2 from '@/assets/img/portfolio/3/portfolio-2.webp';
import testimonial_img_3 from '@/assets/img/portfolio/3/portfolio-3.webp';
import testimonial_img_4 from '@/assets/img/portfolio/3/portfolio-4.webp';
import testimonial_img_5 from '@/assets/img/portfolio/3/portfolio-5.webp';

interface DataType {
  id: number;
  brand_img: StaticImageData;
  brand_tag: string;
  brand_tag2: string;
  brand_tag3: string;
  brand_name: string;
  site_url: string;
}

const testimonial_data: DataType[] = [

  {
    id: 1,
    brand_img: testimonial_img_1,
    brand_tag: "Next JS",
    brand_tag2: "MongoDB",
    brand_tag3: "Cloudlfare R2",
    brand_name: "Ahasa TV",
    site_url:"#",
  },
  {
    id: 2,
    brand_img: testimonial_img_2,
    brand_tag: "E-Commerce",
    brand_tag2: "Next JS",
    brand_tag3: "Nest JS",
    brand_name: "AdMaster",
    site_url:"https://admasterlk.com/",

  },
  {
    id: 3,
    brand_img: testimonial_img_3,
    brand_tag: "Next JS",
    brand_tag2: "Nest js",
    brand_tag3: "Vercel & Render",
    brand_name: "Magnify Ecommerce",
    site_url:"https://www.magnifycreation.lk/",
  },
  {
    id: 4,
    brand_img: testimonial_img_4,
    brand_tag: "Wordpress",
    brand_tag2: "Elementor  pro",
    brand_tag3: "SMTP",
    brand_name: "RathuIra New paper",
    site_url:"https://rathuiranewspaper.lk/"
  },
    {
    id: 5,
    brand_img: testimonial_img_5,
    brand_tag: "React JS",
    brand_tag2: "aws",
    brand_tag3: "Nodemailer",
    brand_name: "Dazzle Story Book",
    site_url: "https://dazzle.storytime.asia/", 
  },
]
export default testimonial_data