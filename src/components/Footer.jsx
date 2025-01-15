import React from "react";
import Instagram from "/assets/instagram.svg";
import Facebook from "/assets/facebook.svg";
import Logo from "/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-customBg text-blackColor py-8 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-around px-4 md:px-8 space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={Logo} alt="Logo" className="mb-4 w-20 md:w-24" />
          <p
            className="font-sfPro text-lg md:text-[22px] leading-[26px]"
            style={{ fontWeight: 274 }}
          >
            Subscribe to our social networks
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-black rounded-full flex h-[50px] w-[50px] justify-center items-center transition-all duration-500 ease-out"
            >
              <img src={Instagram} alt="Instagram" className="w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-black rounded-full flex h-[50px] w-[50px] justify-center items-center transition-all duration-500 ease-out"
            >
              <img src={Facebook} alt="Facebook" className="w-6" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center md:text-left">
          <h3 className="font-sfPro text-lg md:text-[22px] leading-[26px] mb-4">
            Our Company
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#enterprises"
                className="hover:underline custom-style font-sfPro text-lg md:text-[22px]"
              >
                Enterprises
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:underline custom-style font-sfPro text-lg md:text-[22px]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="hover:underline custom-style font-sfPro text-lg md:text-[22px]"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline custom-style font-sfPro text-lg md:text-[22px]"
              >
                Our Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h3 className="font-sfPro text-lg md:text-[22px] leading-[26px] mb-4">
            Communication
          </h3>
          <ul className="space-y-2">
            <li className="custom-style font-sfPro text-lg md:text-[22px]">
              +998974839999
            </li>
            <li className="custom-style font-sfPro text-lg md:text-[22px]">
              +998997126666
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
