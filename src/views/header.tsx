import Button from "../components/button";
import { MdMenuOpen } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import type { MenuItem } from "../lib/types";



const menuItems: MenuItem[] = [
  { name: "Acceuil", link: "/" },
  { name: "Compétences", link: "/skills" },
  { name: "Projets", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

function HeroSection() {
  return (
    <section className="flex bg-[#F0BE86] items-center justify-between lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full flex-col gap-6  flex items-start  p-16">
        <h1 className="md:text-7xl text-3xl font-bold">
          <span className="text-purple-700">Studying</span> Online is now much
          easier
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          incidunt sed ex ipsum provident. Adipisci, quam, corporis architecto
          temporibus minus nobis obcaecati, earum labore odio illum delectus
          dolorem nemo? Saepe!
        </p>
        <div className="flex items-center gap-10">
          <Button className="bg-purple-700 text-white" text="Se connecter" />
          <div className="flex items-center">
            <FaRegPlayCircle className="text-5xl" />
            <Button
              className="bg-transparent text-purple-700"
              text={`textttfslvsftt`}
            />
          </div>
        </div>
      </div>
      <div className="bg-purple-600 lg:w-1/2 w-full h-[400px]"></div>
    </section>
  );
}

export default function Header() {
  return (
    <div className="">
      <section className=" bg-[#F0BE86]">
        <div className="flex container items-center justify-between py-8">

        <h1 className="text-3xl font-semibold">skill</h1>
        <div className="hidden lg:flex gap-8 items-center">
          <ul className="flex gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}> {item.name} </a>
              </li>
            ))}
          </ul>
          <Button className="bg-purple-700 text-white" text="Se connecter" />
          <Button
            className="border-2 bg-transparent text-purple-700 border-purple-700 "
            text="Se connecter"
          />
        </div>
        <MdMenuOpen className="text-7xl lg:hidden block" />
        </div>
      </section>

      <HeroSection />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F0BE86"
          fill-opacity="1"
          d="M0,192L40,202.7C80,213,160,235,240,224C320,213,400,171,480,176C560,181,640,235,720,234.7C800,235,880,181,960,160C1040,139,1120,149,1200,144C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
