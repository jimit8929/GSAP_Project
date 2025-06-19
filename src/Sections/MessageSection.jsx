import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const MessageSection = () => {
  useGSAP(() => {
    // Split words for headings
    const firstMsgSplit = SplitText.create(".first-message", { type: "words" });
    const secMsgSplit = SplitText.create(".second-message", { type: "words" });
    const fuelUpSplit = SplitText.create(".msg-text-scroll h2", { type: "words" });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    // Animate first heading color on scroll
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    // Animate second heading color on scroll
    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Reveal Fuel Up text and animate its words
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });

    // Clip path reveal
    revealTl.to(
      ".msg-text-scroll",
      {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
      },
      0
    );

    // Color and stagger Fuel Up words in same timeline
    revealTl.to(
      fuelUpSplit.words,
      {
        color: "#faeade",
        ease: "power1.in",
        stagger: 0.3,
      },
      0
    );

    // Animate paragraph words
    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div
            className="msg-wrapper text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center md:gap-24 gap-14"
          >
            <h1 className="first-message text-center text-[#faeade10] max-w-xs md:max-w-2xl 2xl:max-w-4xl">
              Stir up your fearless past and
            </h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll rotate-[3deg] 2xl:translate-y-5 -translate-y-5 absolute z-10 border-[.5vw] border-[#7f3b2d] bg-light-brown md:pb-5 pb-3 px-5"
            >
              <h2 className="text-red-brown">Fuel Up</h2>
            </div>

            <h1 className="second-message text-center text-[#faeade10] max-w-xs md:max-w-4xl 2xl:max-w-7xl">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-lg px-10 flex-center">
              <p className="text-3xl text-center font-paragraph">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;