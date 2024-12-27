import React from "react";
import NavBar from "./common/NavBar";
import Image from "next/image";
import Icons from "./common/Icons";

const Hero = () => {
  return (
    <div className="bg-hero custom-lg:h-[810px] bg-cover max-sm:bg-center bg-no-repeat">
      <NavBar />
      <div className=" xl:py-[122px] xl:pr-0 pr-5 lg:py-28 md:py-20 py-14">
        <div className="container relative z-0 max-w-[1140px] xl:px-0">
          <div className="flex max-custom-lg:flex-col max-lg:gap-10">
            <div>
              <h1 className="xl:text-custom-xl lg:text-5xl md:text-4xl text-3xl capitalize !leading-110 max-custom-lg:max-w-[600px] max-custom-lg:text-center max-custom-lg:mx-auto max-w-[470px] lg:max-w-[600px] text-white font-normal">
                Easily Compare{" "}
                <span className="font-bold">Energy, Gas, and Internet</span>{" "}
                Plans
              </h1>
              <p className="md:text-base text-sm text-white lg:mb-[42px] mb-6 text-opacity-90 max-custom-lg:max-w-[600px] max-custom-lg:text-center max-custom-lg:mx-auto !leading-150 mt-4 max-w-[470px] xl:max-w-[506px]">
                Find and switch to the best energy, gas, and internet plans with
                ease. Our platform simplifies your search, letting you compare
                providers and make informed decisions, all in one place.
              </p>
              <div className="flex justify-between max-custom-lg:mx-auto  bg-white p-[9px_9px_9px_0] max-w-[476px] w-full rounded-[0_100px_100px_20px]">
                <input
                  type="mail"
                  className="w-full font-normal text-base !leading-110 outline-none text-deep-blue text-opacity-50 ps-5 pe-2"
                  placeholder="Start typing your address"
                />
                <button
                  aria-label="contact us"
                  className="flex items-center group hover:bg-black duration-300 gap-4 font-bold text-base !leading-115 text-white bg-sky-blue w-full max-w-[137px] py-[12px] ps-5 pe-[3px] rounded-[0_50px_50px_20px]"
                >
                  Compare
                  <Icons icon="heroInputIcon" />
                </button>
              </div>
            </div>
            <div className="custom-lg:absolute max-custom-lg:flex max-custom-lg:justify-center top-[-13px] right-0">
              <Image
                width={558}
                height={768}
                className="xl:w-[558px] xl:h-[768px] rounded-[4px] custom-lg:h-[700px] h-[350px]  max-sm:h-[300px] object-cover object-top md:w-[450px] "
                src="/assets/images/webp/hero-img.webp"
                          />
                          <Image src="/assets/images/svg/hero-ellipse.svg" alt="hero-ellipse" className="absolute top-[-5%] max-custom-lg:hidden -z-10 right-0 xl:right-[-10%]" width={112} height={187}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
