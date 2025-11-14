import type { ButtonProps } from "../lib/types";

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={`bg-amber-700 px-4 py-2 rounded-full cursor-pointer hover:scale-125 transition duration-700 ${className}`}
    >
      {text}
    </button>
  );
}
