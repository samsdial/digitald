import Hero from "@/components/homepage-01/Hero";
import Portfolio from "@/components/homepage-01/Portfolio";
import Testimonial from "@/components/homepage-01/Testimonial";
import HeroV18 from "@/components/homepage-18/HeroV18";
import About from "@/components/shared/About";
import ClientsV3 from "@/components/shared/ClientsV3";
import Community from "@/components/shared/Community";
import CTA from "@/components/shared/CTA";
import CtaImageSlider from "@/components/shared/CtaImageSlider";
import FAQ from "@/components/shared/FAQ";
import LayoutOne from "@/components/shared/LayoutOne";
import ServicesV8 from "@/components/shared/ServicesV8";
import Video from "@/components/shared/Video";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "es" ? "Rivor | Agencia de Diseño" : "Rivor | Design Agency",
    description:
      locale === "es"
        ? "Agencia de diseño creativo especializada en soluciones digitales innovadoras"
        : "Creative design agency specializing in innovative digital solutions",
  };
}

const homepage1 = () => {
  return (
    <LayoutOne>
      {/* <Hero /> */}
      <HeroV18 />
      <Video />
      <About />
      <Portfolio />
      <ClientsV3 />
      <ServicesV8 />
      <Community />
      <FAQ />
      <Testimonial />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: "1", img: "/images/agent/01.jpg" },
            { id: "2", img: "/images/agent/02.jpg" },
            { id: "3", img: "/images/agent/03.jpg" },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
          A virtual coffee?
        </i>
      </CTA>
    </LayoutOne>
  );
};

export default homepage1;
