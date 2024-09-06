import Image from "next/image";

import { title } from "@/components/primitives";
import { FlipWords } from "@/components/ui/flip-words";

export default function AboutPage() {
  return (
    <>
      <section className="grid lg:grid-cols-2 gap-8 content-center min-h-screen">
        <div className="flex flex-col justify-center">
          <div className="min-h-[60vh] flex flex-col justify-center items-center lg:items-start text-center lg:text-start z-[1]">
            <h1 className={title({ size: "lg", color: "green" })}>ECDH</h1>
            <h1 className={title({ size: "lg" })}>
              est&nbsp;
              <FlipWords words={["par", "pour"]} duration={1500} />
            </h1>
            <h1 className={title({ size: "lg" })}>les jeunes</h1>
          </div>
        </div>
        <div className="relative max-h-[60vh]">
          <Image
            fill
            alt="map"
            className="object-cover rounded-lg"
            src="/hero4.webp"
          />
        </div>
      </section>
    </>
  );
}
