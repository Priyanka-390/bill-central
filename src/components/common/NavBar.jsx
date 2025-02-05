"use client";
import { NAV_LINK_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Icons from "./Icons";

const NavBar = () => {
  const [show, setShow] = useState(true);
  function showNav() {
    setShow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:!overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:!overflow-hidden");
    }
  }
  return (
    <div className="py-4">
      <div className="container max-w-[1140px] xl:px-0">
        <div className="flex justify-between items-center">
          <a href="">
            <Image
              src="/assets/images/webp/logo.webp"
              alt="nav-logo"
              height={40}
              width={105}
              className="md:w-[105px] h-10 max-sm:h-8 w-[90px]"
            />
          </a>
          <ul
            className={`flex  items-center gap-4 xl:gap-6 max-lg:z-10 max-lg:justify-center max-lg:flex-col max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-[#09476E] max-lg:w-full max-lg:h-screen  duration-300 ${
              show ? "max-lg:translate-x-full" : "max-lg:translate-x-0"
            }`}
          >
            {NAV_LINK_LIST.map((data, index) => (
              <li key={index}>
                <Link
                  onClick={showNav}
                  href={data.url}
                  className="text-white hover:text-opacity-100 !leading-115 text-opacity-90 font-normal text-base duration-300 relative after:absolute after:w-0 after:h-1 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] after:duration-300"
                >
                  {data.link}
                </Link>
              </li>
            ))}
            <li className="max-sm:block hidden">
              <button
                onClick={showNav}
                aria-label="contact us"
                className="w-full hover:bg-black hover:text-white duration-300 group py-3.5 px-5 max-w-[154px] text-deep-blue rounded-[0px_50px_50px_40px] bg-white flex font-bold text-base items-center text-nowrap l!eading-112"
              >
                Get Started
                <span>
                  <Icons icon="navIcon" />
                </span>
              </button>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <button
              aria-label="contact us"
              className="w-full sm:flex gap-1 hover:bg-black hover:text-white duration-300 group max-sm:hidden py-3.5 px-5 max-w-[154px] text-deep-blue rounded-[0px_50px_50px_40px] bg-white flex font-bold text-base items-center text-nowrap l!eading-112"
            >
              Get Started
              <span>
                <Icons icon="navIcon" />
              </span>
            </button>
            <div
              className="lg:hidden cursor-pointer"
              onClick={showNav}
            >
              {show ? (
                <div className="z-30 cursor-pointer relative">
                  <Icons icon="menuIcon" />
                </div>
              ) : (
                <div className="z-20 cursor-pointer relative">
                  <Icons icon="crossIcon" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
