
interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
 
}[]
// menu data 
const menu_data: DataType[] = [
 
  {
    id: 2,
    title: "About Me",
    link: "#about",
    has_dropdown: false,
  },

  {
    id: 3,
    title: "Experience",
    link: "#experience",
  
  },
  {
    id: 4,
    title: "Projects",
    link: "#projects",
    has_dropdown: true,
  },
    {
    id: 4,
    title: "Technical Skills",
    link: "#technical-skills",
    has_dropdown: true,
  },
   {
    id: 5,
    title: "Certificates",
    link: "#certificates",
    has_dropdown: true,
  },

  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
