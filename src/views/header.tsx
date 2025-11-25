import Button from "../components/button";
import { MdMenuOpen } from "react-icons/md";
import type { MenuItem } from "../lib/types";
import { NavLink } from "react-router-dom";

const menuItems: MenuItem[] = [
  { name: "Acceuil", link: "/" },
  { name: "Compétences", link: "/about" },
  { name: "Projets", link: "/services" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  return (
    <div className="">
      <section className=" bg-[#F0BE86]">
        <div className="flex container items-center justify-between py-8">
          <h1 className="text-3xl font-semibold">skill</h1>
          <nav className="hidden lg:flex gap-8 items-center">
            <ul className="flex gap-8">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  title={item.name}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-700 font-bold underline"
                      : "text-black"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
            <a href="/login">
              <Button
                className="bg-purple-700 text-white"
                text="Se connecter"
              />
            </a>
            <a
              href="/sign_up"
            >
              <Button
                className="border-2 bg-transparent text-purple-700 border-purple-700 "
                text="S'inscrire"
              />
            </a>
          </nav>
          <MdMenuOpen className="text-7xl lg:hidden block" />
        </div>
      </section>
    </div>
  );
}
