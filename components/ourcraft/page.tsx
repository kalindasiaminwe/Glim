import React from 'react';

const Craft = () => {
  return (
    <div className="px-6 lg:px-30 py-12 pb-20">

      <div className='text-center pt-8 pb-10'>
        <h1 className='text-3xl lg:text-4xl text-black'>Our Craft</h1>
        <p className='text-[#2f3030]'>
          Rooted in ancient traditions, awakened by the power of magic, and crafted with the elegance of modern perfumery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Left (tall) */}
        <div className="relative row-span-2 h-80 md:h-[620px] bg-[url('/craft2.jpg')] bg-cover bg-center text-white flex items-end p-6">
          <div>
            <h2 className="text-xl font-semibold">OUR VALUES</h2>
            <p className="text-sm mb-4">Rooted in nature, guided by intuition</p>
            <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
              READ MORE
            </button>
          </div>
        </div>

        {/* Top-right */}
        <div className="relative h-56 md:h-[300px] lg:h-[300px] bg-[url('/craft3.jpg')] bg-cover bg-center text-white flex items-end p-6">
          <div>
            <h2 className="text-xl font-semibold">OUR STORY</h2>
            <p className="text-sm mb-4">We craft moments, one scent at a time</p>
            <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
              READ MORE
            </button>
          </div>
        </div>

        {/* Bottom-right */}
        <div className="relative h-56 md:h-[300px] lg:h-[300px] bg-[url('/Header1.jpg')] bg-cover bg-center text-white flex items-end p-6">
          <div>
            <h2 className="text-xl font-semibold">OUR ART</h2>
            <p className="text-sm mb-4">Mastering the art of aroma & ambience</p>
            <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
