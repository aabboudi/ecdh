import React from "react";

import { Timeline } from "@/components/ui/timeline";

export default function ProjectsPage() {
  const data = [
    {
      title: "VH7",
      dates: {
        start: "2024-08-13",
        end: "2024-08-24",
      },
      description: "TEST",
      images: ["/hero.webp", "/hero1.webp", "/hero2.webp", "/hero3.webp"],
      link: "#",
    },
    {
      title: "SDO24",
      dates: {
        start: "2024-08-13",
        end: "2024-08-24",
      },
      description: "TEST",
      images: ["/hero.webp", "/hero1.webp", "/hero2.webp", "/hero3.webp"],
      link: "#",
    },
    {
      title: "Ramadan",
      dates: {
        start: "2024-08-13",
        end: "2024-08-24",
      },
      description: "TEST",
      images: ["/hero.webp", "/hero1.webp", "/hero2.webp", "/hero3.webp"],
      link: "#",
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
