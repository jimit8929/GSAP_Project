// import { useGSAP } from "@gsap/react";
// import { flavorlists } from "../constants";
// import gsap from "gsap";
// import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

// const FlavorSlider = () => {
//   const sliderRef = useRef();

//   const isTablet = useMediaQuery({
//     query: "(max-width: 1024px)",
//   });

//   useGSAP(() => {
//     const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

//     if (!isTablet) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".flavor-section",
//           start: "2% top",
//           end: `+=${scrollAmount + 1500}px`,
//           scrub: true,
//           pin: true,
//         },
//       });

//       tl.to(".flavor-section", {
//         x: `-${scrollAmount + 1500}px`,
//         ease: "power1.inOut",
//       });
//     }

//     const titleTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".flavor-section",
//         start: "top top",
//         end: "bottom 80%",
//         scrub: true,
//       },
//     });

//     titleTl
//       .to(".first-text-split", {
//         xPercent: -30,
//         ease: "power1.inOut",
//       })
//       .to(
//         ".flavor-text-scroll",
//         {
//           xPercent: -22,
//           ease: "power1.inOut",
//         },
//         "<"
//       )
//       .to(
//         ".second-text-split",
//         {
//           xPercent: -10,
//           ease: "power1.inOut",
//         },
//         "<"
//       );
//   });

//   return (
//     <div ref={sliderRef} className="slider-wrapper">
//       <div className="flavors">
//         {flavorlists.map((flavor) => (
//           <div
//             key={flavor.name}
//             className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
//           >
//             <img
//               src={`/images/${flavor.color}-bg.svg`}
//               alt=""
//               className="absolute bottom-0"
//             />

//             <img
//               src={`/images/${flavor.color}-drink.webp`}
//               alt=""
//               className="drinks"
//             />

//             <img
//               src={`/images/${flavor.color}-elements.webp`}
//               alt=""
//               className="elements"
//             />

//             <h1>{flavor.name}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlavorSlider;


import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="relative w-full 2xl:h-[110dvh] md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        <div className="w-full flex justify-center items-center relative">
          {isMobile ? (
            <img
              src="/images/footer-drink.png"
              className="object-contain max-h-[40vh] w-auto"
              alt=""
            />
          ) : (
            <video
              src="/videos/splash.mp4"
              autoPlay
              playsInline
              muted
              className="object-contain max-h-[50vh] w-auto mix-blend-lighten"
            />
          )}
        </div>

        <div className="flex justify-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="YouTube" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="Instagram" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="TikTok" />
          </div>
        </div>

        <div className="mt-16 md:mt-40 md:px-10 px-5 flex flex-col md:flex-row gap-10 md:gap-10 justify-between text-milk font-paragraph md:text-lg font-medium w-full">
          <div className="flex flex-col md:flex-row items-start md:gap-16 gap-5 w-full md:w-auto">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg w-full">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10 mt-5 gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none placeholder:font-sans placeholder:text-[#999999] text-base md:text-lg"
              />
              <img src="/images/arrow.svg" alt="arrow" className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;