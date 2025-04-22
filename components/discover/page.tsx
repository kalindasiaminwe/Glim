import React from "react";

const Discover = () => {
  return (
    <div className="bg-[#a5b1a1]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6">
        {/* Left Side */}
        <div className="lg:col-span-2 pl-6 lg:pl-20 pr-6 lg:pr-50 mt-12 pt-8 mx-4 lg:mx-20 pb-18">
          <h1 className="text-[#2f3030] text-3xl sm:text-4xl pb-8">
            Discover Your Scent
          </h1>
          <p className="text-white pb-8">
            Find the fragrance that speaks to your soul. Whether you’re drawn to
            earthy undertones, floral notes, or warm, woody aromas, our curated
            collection is designed to awaken your senses and complement every
            mood and moment.
          </p>
          <div className="flex items-center space-x-2">
            <button className="bg-[#1c1918] text-white px-4 py-2 rounded-md hover:bg-[#2f3030] transition">
              Explore Scents
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[url('../public/ml1.png')] bg-cover w-full h-80 lg:h-full " />
      </div>
    </div>
  );
};

export default Discover;
