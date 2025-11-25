import type { Logo } from "../lib/types";

const logos: Logo[] = [
  { src: "/images/placeholder.svg", alt: "Company 1" },
  { src: "/images/placeholder.svg", alt: "Company 2" },
  { src: "/images/placeholder.svg", alt: "Company 3" },
  { src: "/images/placeholder.svg", alt: "Company 4" },
  { src: "/images/placeholder.svg", alt: "Company 5" },
  { src: "/images/placeholder.svg", alt: "Company 6" },
];
export default function Partenaires() {
  return (
    <div className="container space-y-4">
      <h2 className="text-center">Trusted by 5,000+ Companies Worldwide</h2>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-6 " >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            className="rounded-xl w-full h-full object-cover"
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
}
