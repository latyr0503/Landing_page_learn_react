import type React from "react";

export type Logo = {
  src: string;
  alt: string;
};

export interface MenuItem {
  name: string;
  link: string;
}

export interface ButtonProps {
  text: string;
  className?: string;
}

export interface TitleSectionProps {
  titre: string;
  sousTitre: string;
  description?: string;
}

export interface CardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}
