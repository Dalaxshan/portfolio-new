import Link from "next/link";
import menu_data from "./MenuData";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, index) => (
          <li
            key={index}
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
