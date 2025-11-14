import React from "react";
import TitleSection from "../components/title";
import type { CardProps, TitleSectionProps } from "../lib/types";
import Card from "../components/card";
import { FiLayers } from "react-icons/fi";
import { BiCalendar, BiUserMinus } from "react-icons/bi";

const titre: TitleSectionProps = {
  titre: "All-In-One",
  sousTitre: "Cloud Software.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium quia eos libero, culpa illum, sit doloremque, consequatur quas assumenda totam iure placeat! Nobis provident iste dolor, atque reiciendis dolores!",
};

const Cards: CardProps[] = [
  {
    title: "Secure Storage",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium quia eos libero, culpa illum, sit doloremque.",
    icon: <FiLayers />,
  },
  {
    title: "Secure Storage",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium quia eos libero, culpa illum, sit doloremque.",
    icon: <BiCalendar />,
  },
  {
    title: "Secure Storage",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium quia eos libero, culpa illum, sit doloremque.",
    icon: <BiUserMinus />,
  },
];

export default function PremierSection() {
  return (
    <div className="my-24 text-center px-4 space-y-12">
      <TitleSection
        titre={titre.titre}
        sousTitre={titre.sousTitre}
        description={titre.description}
      />
      <div className="grid grid-cols-3 gap-6">
        {Cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}
