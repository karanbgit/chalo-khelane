import React from "react";
import { Search, Bell, User, Sun } from "lucide-react";
import headerBg from "../assets/images/headerbg.jpg";

function Header() {
  return (
    <>
      {/* Fixed width 1920px and height 700px */}
      <div className="w-full max-w-[1920px] lg:h-[700px] mx-auto overflow-hidden">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 bg-white rounded-full mx-auto mt-6 max-w-7xl shadow-lg">
          <div className="px-6">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-orange-500">C</span>
                  <span className="text-2xl font-bold text-gray-800">k</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-900 hover:text-orange-500 font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 font-medium"
                >
                  job
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 font-medium"
                >
                  Services
                </a>
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-orange-500">
                  <Search size={20} />
                </button>
                <button className="text-gray-600 hover:text-orange-500">
                  <Bell size={20} />
                </button>
                <button className="text-gray-600 hover:text-orange-500">
                  <User size={20} />
                </button>
                <button className="text-gray-600 hover:text-orange-500">
                  <Sun size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div
          className="relative w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${headerBg})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
              {/* Left Text Area */}

              <div
                className="
    text-white
    flex flex-col
    items-start
    text-left
    w-full
    px-4
    mt-20

    /* Desktop: Pixel perfect */
    lg:absolute
    lg:w-[808px]
    lg:h-[280px]
    lg:top-[109px]
    lg:left-[-10px]
  "
              >
                {/* Heading 1 */}
                <h1
                  className="
      font-roboto
      font-semibold
      text-3xl
      sm:text-4xl
      lg:text-[64px]
      leading-snug
      mb-3
      lg:mb-8
    "
                >
                  Chalo Khelne
                </h1>

                {/* Heading 2 */}
                <h2
                  className="
      font-roboto
      font-semibold
      text-3xl
      sm:text-4xl
      lg:text-[64px]
      leading-snug
      mb-4
      lg:mb-6
    "
                >
                  Play Compete Connect!
                </h2>

                {/* Paragraph */}
                <p
                  className="
      font-montserrat
      font-normal
      text-base
      sm:text-[16px]
      leading-relaxed
      text-gray-200
      w-full
      max-w-[430px]
      mt-3
      lg:mt-[20px]
    "
                >
                  Unleash your skills, compete with players worldwide, and rise
                  to the top of the leader board!
                </p>

                {/* Buttons */}
                <div
                  className="
      flex
      flex-col
      sm:flex-row
      items-start
      sm:items-center
      gap-4
      mt-4
      lg:mt-[20px]
      lg:w-[436px]
      lg:h-[50px]
    "
                >
                  {/* Download App */}
                  <button
                    className="
        px-4 py-3
        w-full
        sm:w-[208px]
        bg-white
        font-montserrat
        text-gray-900
        rounded-full
        font-semibold
        flex items-center justify-center
        whitespace-nowrap
        hover:bg-gray-100
        transition-all
      "
                  >
                    Download App
                  </button>

                  {/* Organize a Tournament */}
                  <button
                    className="
        px-4 py-3
        w-full
        sm:w-[208px]
        border-2
        border-white
        text-white
        font-montserrat
        rounded-full
        font-semibold
        flex items-center justify-center
        whitespace-nowrap
        hover:bg-white
        hover:text-gray-900
        transition-all
      "
                  >
                    Organize a Tournament
                  </button>
                </div>
              </div>

              {/* Right Side - Circular Badge - HIDDEN ON MOBILE */}
              <div className="hidden lg:block lg:absolute lg:right-[80px] lg:bottom-[128px] xl:right-[170px] xl:bottom-[200px]">
                <div className="relative w-36 h-36">
                  {/* Rotating Text Circle */}
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="text-[8.5px] fill-white font-medium tracking-wider uppercase">
                      <textPath href="#circlePath" startOffset="0">
                        your Court is your Connect • your Court is your Connect
                        • your Court is your Connect • your Court is your
                        Connect •
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Gradient Ball */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 shadow-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
