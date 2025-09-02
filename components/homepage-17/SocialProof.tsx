import RevealWrapperV2 from "../animation/RevealWrapperV2";

const SocialProof = () => {
  return (
    <section className="-z-0">
      <RevealWrapperV2 className="container">
        <div className="relative">
          <div className="z-50 flex items-start justify-center">
            <img
              src="/images/basic/social-proof-02.png"
              alt="social-proof"
              className="inline-block dark:hidden"
            />
            <img
              src="/images/basic/social-proof-dark-02.png"
              alt="social-proof"
              className="hidden dark:inline-block"
            />
          </div>
        </div>
      </RevealWrapperV2>
    </section>
  );
};

export default SocialProof;
