import React from "react";
import type { CardProps } from "../lib/types";

export default function Card({ title, content, icon }: CardProps) {
  return (
    <div className="shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
      <div className="w-20 h-20 flex items-center justify-center bg-purple-700 rounded-full text-4xl text-white">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
