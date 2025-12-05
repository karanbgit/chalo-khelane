import React, { useEffect, useRef, useState } from "react";
import aboutus1 from "../assets/images/aboutus1.png";
import aboutus2 from "../assets/images/aboutus2.png";
import aboutus3 from "../assets/images/aboutus3.png";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="w-full bg-gray-50 py-16 px-4 overflow-hidden" ref={sectionRef}>
      <div className="max-w-[1920px] mx-auto">
        {/* About Us Label */}
        <p className="text-orange-500 font-roboto text-base text-[20px] text-center mb-4">
          About Us
        </p>

        {/* Main Heading */}
        <h2
          className="font-roboto font-medium text-[36px] leading-[100%] text-center text-gray-900 mb-6"
          style={{ maxWidth: "828px", margin: "0 auto 24px" }}
        >
          Where Sports Meets Community
        </h2>

        {/* Description Paragraph */}
        <p
          className="font-montserrat font-medium text-[20px] leading-[145%] text-center text-gray-600 mb-8"
          style={{ maxWidth: "828px", margin: "0 auto 32px" }}
        >
          Chalo Khelne makes it effortless to organize, play, and celebrate your
          love for Table Tennis. Whether you're an organizer managing
          tournaments or a player looking to compete, our platform brings
          everyone together on one seamless app. From registrations and live
          scoring to sharing match highlights, Chalo Khelne redefines how the
          sports community connects and grows.
        </p>

        {/* Learn More Button */}
        <div className="flex justify-center mb-16">
          <button className="w-[160px] h-[50px] bg-orange-500 text-white font-montserrat font-semibold rounded-[30px] px-5 py-3.5 hover:bg-orange-600 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Images Section */}
        <div className="flex justify-center items-center gap-8 max-w-5xl mx-auto flex-wrap lg:flex-nowrap">
          {/* Left Image - Animates from left with rotation */}
          <div
            className="w-[317px] h-[369px] rounded-3xl overflow-hidden shadow-2xl"
            style={{
              animation: isVisible ? "slideInLeftRotate 1s ease-out forwards" : "none",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "none" : "translateX(-150px) rotate(-15deg)",
            }}
          >
            <img
              src={aboutus1}
              alt="Table Tennis Paddle"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Center Image - Taller, animates from bottom with scale */}
          <div
            className="w-[318px] h-[476px] top[-54] left[0.5px] rounded-3xl overflow-hidden shadow-2xl"
            style={{
              animation: isVisible ? "slideInBottomScale 1s ease-out 0.2s forwards" : "none",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "none" : "translateY(150px) scale(0.8)",
            }}
          >
            <img
              src={aboutus2}
              alt="Player Serving"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Right Image - Animates from right with rotation */}
          <div
            className="w-[317px] h-[369px] rounded-3xl overflow-hidden shadow-2xl"
            style={{
              animation: isVisible ? "slideInRightRotate 1s ease-out 0.4s forwards" : "none",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "none" : "translateX(150px) rotate(15deg)",
            }}
          >
            <img
              src={aboutus3}
              alt="Table Tennis Equipment"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeftRotate {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotate(-8deg) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }

        @keyframes slideInRightRotate {
          0% {
            opacity: 0;
            transform: translateX(100px) rotate(8deg) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }

        @keyframes slideInBottomScale {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUs;