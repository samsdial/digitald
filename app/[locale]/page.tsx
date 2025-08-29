import WhyChooseUsV6 from "@/components/homepage-17/WhyChooseUsV6";
import AchievementGridV2 from "@/components/homepage-18/AchievementGridV2";
import HeroV18 from "@/components/homepage-18/HeroV18";
import OurExpertise from "@/components/homepage-18/OurExpertise";
import PortfolioV5 from "@/components/homepage-18/PortfolioV5";
import ServicesV15 from "@/components/homepage-18/ServicesV15";
import TestimonialV10 from "@/components/homepage-18/TestimonialV10";
import CTA from "@/components/shared/CTA";
import CtaImageSlider from "@/components/shared/CtaImageSlider";
import LayoutTwo from "@/components/shared/LayoutTwo";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "es" ? "Idial | Agencia de Diseño" : "Idial | Design Agency",
    description:
      locale === "es"
        ? "Agencia de diseño creativo especializada en soluciones digitales innovadoras"
        : "Creative design agency specializing in innovative digital solutions",
  };
}

export default function LocalePage() {
  return (
    <LayoutTwo>
      <HeroV18 />
      <ServicesV15 />
      <AchievementGridV2 />
      <PortfolioV5 />
      <TestimonialV10 />
      <WhyChooseUsV6 />
      <OurExpertise />
      <CTA buttonText="Start Your Project">
        Let’s Create
        <CtaImageSlider
          slides={[
            { id: "1", img: "/images/agent/14.png" },
            { id: "2", img: "/images/agent/12.png" },
            { id: "3", img: "/images/agent/13.png" },
          ]}
        />
        Content
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">
          That Delivers Results
        </span>
      </CTA>
    </LayoutTwo>
  );
}
