import React from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import GetToKnowUs from "@/components/gettoknowus";
import WhatKeepsUsGoing from "@/components/whatkeepsusgoing";
import Technologies from "@/components/technologies";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
            <Image src="/google.svg" alt="google" width={200} height={200} />
            <span className="text-3xl sm:text-5xl font-bold">
              Developer Groups
            </span>
          </div>
          <div className="mt-4">
            <span className="text-2xl sm:text-4xl font-semibold text-gray-600 dark:text-gray-200">
              RBU Chapter
            </span>
          </div>
        </div>
        <div className="mt-8 w-full">
          <Hero />
        </div>
        <div className="mt-72 flex flex-col items-center justify-center max-w-3xl">
          <p className="text-center text-gray-700 dark:text-gray-200 font-normal text-lg sm:text-xl">
            Google Developer Groups are community groups for college and
            university students interested in Google developer technologies.
          </p>
          <button className="px-8 sm:px-10 py-2 sm:py-3 font-semibold rounded-md mt-4 text-white bg-[#3686F7] shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            Join Us
          </button>
        </div>
        <div className="mt-8 flex flex-col justify-center ">
          {[33, 153, 255].map((opacity, index) => (
            <svg
              key={index}
              width="30"
              height="20"
              viewBox="0 0 59 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-5 sm:w-10 sm:h-6"
            >
              <path
                d="M52.0675 6.20899e-07L29.5 23.4872L6.9325 8.26692e-08L3.66919e-07 7.23077L29.5 38L59 7.23077L52.0675 6.20899e-07Z"
                fill={`#5F5F5F${opacity.toString(16).padStart(2, "0")}`}
              />
            </svg>
          ))}
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <GetToKnowUs />
      </div>
      <div className="w-full max-w-7xl">
        <WhatKeepsUsGoing />
      </div>
      <div className="w-full max-w-7xl">
        <Technologies />
      </div>
      <div className="w-full max-w-7xl">
        <FAQ />
      </div>
    </section>
  );
}
