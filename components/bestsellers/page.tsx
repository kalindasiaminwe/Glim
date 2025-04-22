"use client";
import { useState } from "react";
import { Card, CardBody } from "@heroui/react";

export default function Bestsellers() {
  const [selected, setSelected] = useState("new");

  const tabs = [
    {
      id: "new",
      label: "New",
      products: [
        { name: "Travel Candles", image: "New1.png", price: "$25.00" },
        { name: "Aesthetic Candles", image: "New2.png", price: "$30.00" },
        { name: "Aromatherapy Candles", image: "New3.png", price: "$20.00" },
        {
          name: "Product 4",
          image: "https://via.placeholder.com/150",
          price: "$35.00",
        },
        {
          name: "Product 5",
          image: "https://via.placeholder.com/150",
          price: "$40.00",
        },
        {
          name: "Product 6",
          image: "https://via.placeholder.com/150",
          price: "$50.00",
        },
      ],
    },
    {
      id: "bestseller",
      label: "Best sellers",
      products: [
        { name: "Product A", image: "New1.png", price: "$15.00" },
        { name: "Product B", image: "New2.png", price: "$45.00" },
        { name: "Product C", image: "New3.png", price: "$55.00" },
        {
          name: "Product D",
          image: "https://via.placeholder.com/150",
          price: "$60.00",
        },
        {
          name: "Product E",
          image: "https://via.placeholder.com/150",
          price: "$70.00",
        },
        {
          name: "Product F",
          image: "https://via.placeholder.com/150",
          price: "$80.00",
        },
      ],
    },
  ];

  return (
    <div className="flex w-full flex-col bg-[#e1d7d0] py-10 px-4 sm:px-8 md:px-16 lg:px-32 text-black">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-5 font-bold">
        Our Signature Scents
      </h1>

      <div className="flex flex-wrap items-center justify-between mt-6 gap-y-4">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelected(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-all focus:outline-none ${
                selected === tab.id
                  ? "border-b-2 border-[#a5b1a1] text-black"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button className="px-4 py-2 text-sm border-2 border-[#a5b1a1] font-medium text-black hover:text-[#2f3030] focus:outline-none transition-all hover:scale-110">
          View All
        </button>
      </div>

      <div className="mt-6">
        {tabs.map(
          (tab) =>
            selected === tab.id && (
              <div
                key={tab.id}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10"
              >
                {tab.products.slice(0, 3).map((product, index) => (
                  <Card key={index} className="flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <CardBody className="p-4 pl-12 w-full">
                      <h3 className="text-md font-semibold">{product.name}</h3>
                      <p className="text-gray-500 mt-2 text-sm">{product.price}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            )
        )}
      </div>

      <div className="h-px bg-[#827166] w-full max-w-[300px] mx-auto mt-4" />
    </div>
  );
}
