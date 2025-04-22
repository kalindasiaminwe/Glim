import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"; // Adjust path based on your project structure

const Footer = () => {
  return (
    <footer className="bg-[#1c1918] text-white px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Logo + Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-2">UNLOCK EXCLUSIVE OFFERS</h3>
          <p className="text-sm text-[#d0c8c5] mb-4">
            Subscribe and be the first to experience our newest candles,
            exclusive deals, and expert guidance. Your perfect scent awaits!
          </p>
          <div className="flex flex-row sm:flex-row items-center gap-4 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 px-4 rounded-l bg-white text-black text-sm w-auto sm:w-auto "
            />
            <button className="bg-[#d6c3b8] text-black text-sm px-4 py-2 rounded-r mt-0 sm:mt-0">
              SIGN UP
            </button>
          </div>
          <div className="flex gap-4 mt-4 justify-start sm:justify-start">
            <FaFacebookF className="text-xl hover:text-[#d6c3b8] cursor-pointer" />
            <FaInstagram className="text-xl hover:text-[#d6c3b8] cursor-pointer" />
          </div>
        </div>

        {/* Shop + Customer Service in two columns even on mobile */}
        <div className="grid grid-cols-2 gap-6">
          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">SHOP</h4>
            <ul className="space-y-2 text-sm text-[#d0c8c5]">
              <li>Collection</li>
              <li>Scented Candles</li>
              <li>Essential Oils</li>
              <li>Home Perfumes</li>
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">CUSTOMER SERVICE</h4>
            <ul className="space-y-2 text-sm text-[#d0c8c5]">
              <li>My Account</li>
              <li>Contact Us</li>
              <li>Shipping & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 flex justify-center md:justify-end text-sm text-[#d0c8c5] gap-4 border-t border-[#333] pt-4">
        <span>Terms</span>
        <span>|</span>
        <span>Privacy</span>
      </div>
    </footer>
  );
};

export default Footer;
