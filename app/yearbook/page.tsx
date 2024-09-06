import { title } from "@/components/primitives";
import Image from "next/image";

import { ScribbleUnderline } from "@/components/ui/animated-underlines";

const images = [
  "/hero.webp",
  "/hero1.webp",
  "/hero2.webp",
  "/hero3.webp",
  "/hero4.webp",
  "/hero5.webp",
]

export default function Yearbook() {
  return (
    <section>
      <div className="flex flex-col items-center lg:mt-16 py-8">
        <h1 className={title({ class: "relative w-fit" })}>
          Yearbook 2024
          <ScribbleUnderline />
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-10 lg:py-14">
        {Array.from({ length: 4 }).map((_, containerIndex) => (
          <div key={containerIndex} className="space-y-2">
            {shuffleArray(images).map((path: string, index: number) => (
              <Image
                key={`${containerIndex}-${index}`}
                alt="Gallery Masonry Image"
                className="w-full h-auto object-cover"
                height={500}
                src={path}
                width={500}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

const shuffleArray = (arr: string[]) => {
  return arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};
