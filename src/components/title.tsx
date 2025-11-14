import React from "react";
import type { TitleSectionProps } from "../lib/types";

export default function TitleSection({
  titre,
  sousTitre,
  description,
}: TitleSectionProps) {
  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <h2 className="text-purple-700 text-4xl font-bold">
        {" "}
        {titre} <span className="text-amber-500">{sousTitre} </span>
      </h2>
      <p>{description}</p>
    </div>
  );
}
