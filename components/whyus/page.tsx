import React from "react";
import { GiVineFlower, GiEcology } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";

const WhyUs = () => {
  return (
    <div className="bg-[#e1d7d0] mb-15">

      {/* Grid: 1 column on small screens, 3 on large */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-black px-6 lg:px-50">
        {/* Title */}
        <div className="flex items-center justify-center">
          <h1 className="text-2xl">Why us?</h1>
        </div>

        {/* 2nd container */}
        <div className="shadow-md pt-5 px-5 pb-0">
          <GiEcology className="text-5xl text-[#2f3030]" />
          <h1 className="text-2xl font-semibold py-3 min-h-[4rem] leading-snug">
            Eco-Friendly & Sustainable
          </h1>
          <p className="text-[15px] pt-10 pb-5 min-h-[6rem] leading-relaxed">
            We care for the planet by using reusable containers and biodegradable materials for a greener tomorrow.
          </p>
        </div>

        {/* 3rd container */}
        <div className="shadow-md pt-5 px-5">
          <FaHandHoldingHand className="text-5xl text-[#2f3030]" />
          <h1 className="text-2xl font-semibold py-3 min-h-[4rem] leading-snug">
            Handcrafted with Care & Quality
          </h1>
          <p className="text-[15px] pt-10 min-h-[6rem] leading-relaxed">
            Every candle is made using natural, premium ingredients for a long-lasting, aromatic experience.
          </p>
        </div>

        {/* 4th container */}
        <div className="shadow-md pt-5 px-5">
          <GiVineFlower className="text-4xl text-[#2f3030]" />
          <h1 className="text-2xl font-semibold py-3 min-h-[4rem] leading-snug">
            Signature Scents, Just for You
          </h1>
          <p className="text-[15px] pt-10 pb-5 min-h-[6rem] leading-relaxed">
            Explore our exclusive fragrance blends that bring peace, comfort, and joy to your living spaces.
          </p>
        </div>

        {/* 5th container */}
        <div className="shadow-md pt-5 px-5">
          <FaHandHoldingHeart className="text-4xl text-[#2f3030]" />
          <h1 className="text-2xl font-semibold py-3 min-h-[4rem] leading-snug">
            Thoughtfully Made with Love
          </h1>
          <p className="text-[15px] pt-10 pb-5 min-h-[6rem] leading-relaxed">
            Designed to enhance your well-being, our candles soothe the senses and uplift your spirit.
          </p>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center">
          <button className="border-2 border-[#a5b1a1] py-2 px-4 hover:bg-[#a5b1a1] transition-all duration-300">
            Learn more
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-1 border-[#827166] w-200 mx-auto bg-white mt-10" />
    </div>
  );
};

export default WhyUs;
