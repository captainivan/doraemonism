import React from "react";
import Image from "next/image";
import Logo from "@/app/images/logo.webp"; 
const Footer = () => {
  return (
    <footer className="bg-[#0097e3] text-white py-6">
      <div className="container mx-auto px-5 flex flex-col sm:flex-row items-center justify-between">
        <a className="flex items-center justify-center sm:justify-start title-font font-medium text-white">
          <Image
            src={Logo}
            height={50}
            width={50}
            draggable="false"
            alt="logo"
            className="rounded-full"
          />
          <span className="ml-3 text-xl font-bold">DORAEMONISM</span>
        </a>

        {/* Copyright & Creator */}
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 CREATED BY
          <a
            href="https://www.reddit.com/user/ilunarivan/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <span className="bg-black text-white px-3 py-1 rounded-full font-medium cursor-pointer">
              Lunar Ivan
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
