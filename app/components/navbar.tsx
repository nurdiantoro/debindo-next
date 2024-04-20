import Image from "next/image";
import React from "react";
// import logo from "../assets/img/debindo-logo-01.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-warna-01 px-40 md:h-16">
      <div className="flex h-full flex-row items-center justify-between md:mx-auto md:w-[1000px]">
        <a href="/">
          <Image
            src="/img/debindo-logo-negative.svg"
            alt="alt"
            width={60}
            height={60}
          />
        </a>
        <ul className="flex h-full flex-col items-center md:flex-row">
          <li className="relative h-full rounded px-4 text-white ">
            <a
              href="/"
              className="my-auto block py-6 font-openSans text-[12px]  before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-warna-02 before:duration-300 before:content-[''] hover:before:w-full"
            >
              HOME
            </a>
          </li>
          <li className="relative h-full rounded px-4 text-white ">
            <a
              href="/about"
              className="my-auto block py-6 font-openSans text-[12px] before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-warna-02 before:duration-300 before:content-[''] hover:before:w-full"
            >
              ABOUT
            </a>
          </li>
          <li className="relative h-full rounded px-4 text-white ">
            <a
              href="/team"
              className="my-auto block py-6 font-openSans text-[12px]  before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-warna-02 before:duration-300 before:content-[''] hover:before:w-full"
            >
              OUR TEAM
            </a>
          </li>
          <li className="relative h-full rounded px-4 text-white ">
            <a
              href="/events"
              className="my-auto block py-6 font-openSans text-[12px]  before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-warna-02 before:duration-300 before:content-[''] hover:before:w-full"
            >
              EVENTS
            </a>
          </li>
          <li className="relative h-full rounded px-4 text-white ">
            <a
              href="/career"
              className="my-auto block py-6 font-openSans text-[12px]  before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-warna-02 before:duration-300 before:content-[''] hover:before:w-full"
            >
              CAREER
            </a>
          </li>
          <li className="relative h-full rounded px-4 text-white ">
            <a
              href="/news"
              className="my-auto block py-6 font-openSans text-[12px]  before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-warna-02 before:duration-300 before:content-[''] hover:before:w-full"
            >
              NEWS
            </a>
          </li>
          <li className="relative h-full rounded px-4 text-white ">
            <a
              href="/contact"
              className="my-auto block py-6 font-openSans text-[12px] before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:bg-warna-02 before:duration-300 before:content-[''] hover:before:w-full"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
