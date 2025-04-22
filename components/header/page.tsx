"use client";

import React from "react";
import Nav from "./navbar";
import PrimaryNav from "./primarynav";

const Header = () => {
  return (
    <div className="bg-[#e1d7d0]">
      <Nav />

      <div
        className={`
          bg-cover bg-center w-full h-screen
          bg-[url('../public/md-bg.png')]
          md:bg-[url('../public/Header6.png')]
        `}
      >
        <PrimaryNav />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full px-6 md:px-20">
          {/* Right Side Text for Desktop */}
          <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center md:col-start-2 pt-65 md:pt-0 ">
            <p className="text-[#2f3030] max-w-xl">
              Discover the art of scent and ambiance with Glim. Our hand-poured
              candles and carefully crafted diffusers are designed to transform
              any space into a serene escape. From warm, comforting aromas to
              fresh, uplifting blends, each product is a sensory
              experience—inviting you to slow down, breathe in, and simply be.
            </p>

            <div className="flex  justify-center ">
              <button className=" relative mt-10 py-2 px-10 text-black rounded before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-[2px] before:bg-[#a5b1a1] hover:before:w-20 transition-all duration-700 ease-in-out hover:scale-110">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[#827166] w-full max-w-6xl mx-auto bg-white mt-4" />
    </div>
  );
};

export default Header;
