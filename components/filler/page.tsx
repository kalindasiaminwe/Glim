import React from "react";

const Filler = () => {
  return (
    <div className="bg-[url('/filler1.png')] bg-center bg-no-repeat bg-contain bg-[#efefec] w-full h-screen">
      <div className="text-center pt-12">
        <h1 className="text-3xl sm:text-4xl text-black">Customer Reviews</h1>
      </div>

      <div className="pt-65 sm:pt-95">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 px-4">
          <div className="bg-[#ded7d1] text-[#2f3030] p-2 sm:p-6 rounded-md shadow-sm text-sm sm:text-base">
            <p className="mb-3 sm:mb-4">
              “The scent of Midnight Bloom fills my home with a cozy and elegant
              vibe. Absolutely love it!”
            </p>
            <p className="font-semibold">Anna B.</p>
          </div>

          <div className="bg-[#ded7d1] text-[#2f3030] p-2 sm:p-6 rounded-md shadow-sm text-sm sm:text-base">
            <p className="mb-3 sm:mb-4">
              “Glim candles last so long, and the packaging is stunning. Perfect
              for gifts!”
            </p>
            <p className="font-semibold">Daniel L.</p>
          </div>

          <div className="bg-[#ded7d1] text-[#2f3030] p-2 sm:p-6 rounded-md shadow-sm text-sm sm:text-base">
            <p className="mb-0 sm:mb-4">
              “Sustainability and luxury in one product. This brand is a
              must-have.”
            </p>
            <p className="font-semibold">Olivia R.</p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center pt-0 sm:pt-8">
          <button className="relative mt-2 px-10 text-black rounded before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-[2px] before:bg-[#a5b1a1] hover:before:w-35 transition-all duration-700 ease-in-out hover:scale-110">
            READ MORE REVIEWS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filler;
