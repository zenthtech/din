"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import comSoon from "@/app/components/com.json";

export default function Home() {
  return (
    <>
      <div>
        {/* Desktop */}
        <div className="hidden 2xl:block">
          <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
            style={{ backgroundImage: "url('/bg.png')" }}
          >
            {/* Logo at Top */}
            <div className="flex justify-end p-8">
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </div>

            {/* Main Content (Centered) */}
            <div className="flex flex-col justify-center items-center pb-10">
              {/* Lottie Animation */}
              <div className="h-[40%] w-[30%]">
                <Lottie animationData={comSoon} loop={true} />
              </div>

              {/* Coming Soon Image */}
              <Image
                src="/comsoon.png"
                alt="Coming Soon"
                width={200}
                height={200}
                className="w-[20%] mt-6"
              />
            </div>

            {/* Footer Section */}
            <div className="flex flex-col justify-center items-center pb-4 gap-2">
              {/* Second Logo */}
              <Image
                src="/logo2.png"
                alt="Second Logo"
                width={100}
                height={100}
                className="w-[10%]"
              />

              {/* Divider Line */}
              <div className="w-[14%] h-[1px] bg-gray-400"></div>

              {/* Copyright Text */}
              <div>
                <p className="text-gray-600 text-xs opacity-70 font-bold">
                  Copyright © STARNEST Media 2025 | Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop */}
        <div className="hidden 2xl:hidden lg:block">
          <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
            style={{ backgroundImage: "url('/bg.png')" }}
          >
            {/* Logo at Top */}
            <div className="flex justify-end p-4">
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </div>

            {/* Main Content (Centered) */}
            <div className="flex flex-col justify-center items-center pb-10">
              {/* Lottie Animation */}
              <div className="h-[40%] w-[30%]">
                <Lottie animationData={comSoon} loop={true} />
              </div>

              {/* Coming Soon Image */}
              <Image
                src="/comsoon.png"
                alt="Coming Soon"
                width={200}
                height={200}
                className="w-[20%] mt-6"
              />
            </div>

            {/* Footer Section */}
            <div className="flex flex-col justify-center items-center pb-4 gap-2">
              {/* Second Logo */}
              <Image
                src="/logo2.png"
                alt="Second Logo"
                width={100}
                height={100}
                className="w-[10%]"
              />

              {/* Divider Line */}
              <div className="w-[14%] h-[1px] bg-gray-400"></div>

              {/* Copyright Text */}
              <div>
                <p className="text-gray-600 text-xs opacity-70 font-bold">
                  Copyright © STARNEST Media 2025 | Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Tab */}
        <div className="hidden lg:hidden md:block">

        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
            style={{ backgroundImage: "url('/bg.png')" }}
          >
            {/* Logo at Top */}
            <div className="flex justify-end p-6">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </div>

            {/* Main Content (Centered) */}
            <div className="flex flex-col justify-center items-center pb-40">
              {/* Lottie Animation */}
              <div className="h-[40%] w-[80%]">
                <Lottie animationData={comSoon} loop={true} />
              </div>

              {/* Coming Soon Image */}
              <Image
                src="/comsoon.png"
                alt="Coming Soon"
                width={200}
                height={200}
                className="w-[60%] mt-6"
              />
            </div>

            {/* Footer Section */}
            <div className="flex flex-col justify-center items-center pb-16 gap-2">
              {/* Second Logo */}
              <Image
                src="/logo2.png"
                alt="Second Logo"
                width={100}
                height={100}
                className="w-[36%]"
              />

              {/* Divider Line */}
              <div className="w-[46%] h-[1.6px] bg-gray-400"></div>

              {/* Copyright Text */}
              <div>
                <p className="text-gray-600 text-xs opacity-70 font-bold">
                  Copyright © STARNEST Media 2025 | Privacy Policy
                </p>
              </div>
            </div>
          </div>


        </div>
        {/* Mobile */}
        <div className="md:hidden">

        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
            style={{ backgroundImage: "url('/bg.png')" }}
          >
            {/* Logo at Top */}
            <div className="flex justify-end p-6">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </div>

            {/* Main Content (Centered) */}
            <div className="flex flex-col justify-center items-center pb-40">
              {/* Lottie Animation */}
              <div className="h-[40%] w-[80%]">
                <Lottie animationData={comSoon} loop={true} />
              </div>

              {/* Coming Soon Image */}
              <Image
                src="/comsoon.png"
                alt="Coming Soon"
                width={200}
                height={200}
                className="w-[60%] mt-6"
              />
            </div>

            {/* Footer Section */}
            <div className="flex flex-col justify-center items-center pb-16 gap-2">
              {/* Second Logo */}
              <Image
                src="/logo2.png"
                alt="Second Logo"
                width={100}
                height={100}
                className="w-[36%]"
              />

              {/* Divider Line */}
              <div className="w-[56%] h-[1.6px] bg-gray-400"></div>

              {/* Copyright Text */}
              <div>
                <p className="text-gray-600 text-xs opacity-70 font-bold">
                  Copyright © STARNEST Media 2025 | Privacy Policy
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
