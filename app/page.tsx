import HeroV17 from "@/components/homepage-17/HeroV17";
import MarqueeV3 from "@/components/homepage-17/MarqueeV3";
import SocialProof from "@/components/homepage-17/SocialProof";
import LayoutTwo from "@/components/shared/LayoutTwo";

export const metadata = {
  title: "Experiencias digitales de alto impacto  - Idial",
};

const Home = () => {
  return (
    <LayoutTwo>
      <HeroV17 />
      <SocialProof />
      <MarqueeV3 />
      {/* <ClientSuccessStories />
      <ServicesV15 />
      <DawnloadOurApp />
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
      <CTA buttonText="Book a Free Consultation">
        Let’s Build
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/13.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/12.png' },
          ]}
        />
        Next
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">App Together</span>
      </CTA> */}
    </LayoutTwo>
  );
};

export default Home;
