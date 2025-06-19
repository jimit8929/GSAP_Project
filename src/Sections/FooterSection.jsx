import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section bg-[#222123] overflow-hidden relative">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="relative md:pt-[20vh] pt-[10vh] min-h-[80vh] flex flex-col">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
            alt="Spylt drink"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            loop
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
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

        <div className="mt-10 md:mt-20 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium flex-grow">
          <div className="flex md:items-center gap-10 md:gap-16 flex-wrap">
            <div>
              <p className="font-bold mb-2">SPYLT Flavors</p>
            </div>
            <div className="space-y-2">
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div className="space-y-2">
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg w-full mt-8 md:mt-0">
            <p className="mb-4">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent placeholder:font-sans placeholder:text-[#999999] focus:outline-none text-lg md:text-xl lg:text-2xl"
              />
              <button className="ml-4 flex-shrink-0">
                <img src="/images/arrow.svg" alt="Submit" className="w-6 md:w-8" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full px-5 md:px-10 py-7 text-milk opacity-50 md:text-lg font-paragraph flex flex-col-reverse md:flex-row gap-5 md:gap-7 justify-between items-center mt-auto">
          <p className="text-center">Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-5 md:gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          position: relative;
        }
        
        .social-btn {
          border: 1px solid rgba(250, 226, 222, 0.2);
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 9999px;
          transition: background-color 0.3s;
          cursor: pointer;
        }
        
        .social-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        @media (min-width: 768px) {
          .social-btn {
            width: 5vw;
            height: 5vw;
            max-width: 70px;
            max-height: 70px;
          }
        }
      `}</style>
    </section>
  );
};

export default FooterSection;