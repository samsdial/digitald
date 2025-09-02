"use client";
import useScrollingMarquee from "@/hooks/useScrollingMarquee";
import Link from "next/link";
import RevealWrapper from "../animation/RevealWrapper";

const data = [
  {
    id: 1,
    logo: "/images/brands/redNuclear.svg",
    darkLogo: "/images/brands/redNuclear-dark.svg",
    alt: "Red Nuclear Colombiana",
  },
  {
    id: 2,
    logo: "/images/brands/ItaliaPerTutti.svg",
    darkLogo: "/images/brands/ItaliaPerTutti-dark.svg",
    alt: "Italia Per Tutti",
  },
  {
    id: 3,
    logo: "/images/brands/redNuclear.svg",
    darkLogo: "/images/brands/redNuclear-dark.svg",
    alt: "Red Nuclear Colombiana",
  },
  {
    id: 4,
    logo: "/images/brands/ItaliaPerTutti.svg",
    darkLogo: "/images/brands/ItaliaPerTutti-dark.svg",
    alt: "Italia Per Tutti",
  },
  {
    id: 5,
    logo: "/images/brands/redNuclear.svg",
    darkLogo: "/images/brands/redNuclear-dark.svg",
    alt: "Red Nuclear Colombiana",
  },
  {
    id: 6,
    logo: "/images/brands/ItaliaPerTutti.svg",
    darkLogo: "/images/brands/ItaliaPerTutti-dark.svg",
    alt: "Italia Per Tutti",
  },
  {
    id: 7,
    logo: "/images/brands/redNuclear.svg",
    darkLogo: "/images/brands/redNuclear-dark.svg",
    alt: "Red Nuclear Colombiana",
  },
  {
    id: 8,
    logo: "/images/brands/ItaliaPerTutti.svg",
    darkLogo: "/images/brands/ItaliaPerTutti-dark.svg",
    alt: "Italia Per Tutti",
  },
  {
    id: 9,
    logo: "/images/brands/redNuclear.svg",
    darkLogo: "/images/brands/redNuclear-dark.svg",
    alt: "Red Nuclear Colombiana",
  },
  {
    id: 10,
    logo: "/images/brands/ItaliaPerTutti.svg",
    darkLogo: "/images/brands/ItaliaPerTutti-dark.svg",
    alt: "Italia Per Tutti",
  },
  {
    id: 11,
    logo: "/images/brands/redNuclear.svg",
    darkLogo: "/images/brands/redNuclear-dark.svg",
    alt: "Red Nuclear Colombiana",
  },
  {
    id: 12,
    logo: "/images/brands/ItaliaPerTutti.svg",
    darkLogo: "/images/brands/ItaliaPerTutti-dark.svg",
    alt: "Italia Per Tutti",
  },
];

const MarqueeV3 = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee();

  const handleMouseEnter = () => {
    pauseMarquee();
  };

  const handleMouseLeave = () => {
    resumeMarquee();
  };
  return (
    <section className="relative z-[2000] -mt-[160px] overflow-hidden bg-backgroundBody pb-14 pt-28 dark:bg-secondary sm:-mt-[250px] md:-mt-[350px] md:pb-16 md:pt-32 lg:-mt-[450px] lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div>
        <RevealWrapper
          as="p"
          className="reveal-me container mb-8 text-center lg:mb-16"
        >
          Nuestras soluciones impulsan negocios en todo el mundo.
        </RevealWrapper>
        <RevealWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden"
        >
          <div
            ref={marqueeRef}
            className="z-50 flex w-fit flex-nowrap whitespace-nowrap"
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border-y border-r border-y-secondary/10 border-r-secondary/10 bg-backgroundBody dark:border-y-backgroundBody/10 dark:border-r-backgroundBody/10 dark:bg-dark"
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="inline-block dark:hidden"
                />
                <img
                  src={item.darkLogo}
                  alt={item.alt}
                  className="hidden dark:inline-block"
                />
              </div>
            ))}
          </div>
        </RevealWrapper>
        <RevealWrapper
          as="ul"
          className="reveal-me container mt-7 grid justify-self-center max-md:w-full md:mt-14"
        >
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link
              href="#"
              className="rv-button rv-button-white block md:inline-block"
            >
              <div className="rv-button-top">
                <span>Ver nuestro trabajo</span>
              </div>
              <div className="rv-button-bottom">
                <span>Ver nuestro trabajo</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default MarqueeV3;
