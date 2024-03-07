import Link from "next/link";
import React from "react";

const BannerCTA = ({ className }) => {
  return (
    <main className={`${className} w-full bg-brand_black`}>
      <div className="relative px-5 lg:px-8">
        <div className="mx-auto max-w-7xl py-10 sm:py-28 lg:pt-10 lg:pb-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center max-w-screen-xl mx-auto ">
            <h1 className="text-3xl font-semibold  tracking-tight text-white sm:text-6xl">
              How may we assist you?
            </h1>
            <div className="mx-auto  max-w-7xl">
              <p className="mt-6 text-lg leading-8 font-light text-white">
                Discover the transformative power of digital signage for your
                business with SignageBot. Elevate your brand, captivate your
                audience, and leave a memorable impression on your customers. By
                leveraging the dynamic capabilities of digital signage, your
                business can draw in and engage customers more effectively,
                communicate targeted messages directly, and enhance brand
                recognition. Benefit from real-time content updates, actionable
                data insights, and eye-catching visuals that together drive
                sales and foster customer loyalty. Starting today, you can
                create a FREE account and begin crafting your digital signage
                presentations effortlessly. Control your displays at no cost and
                choose from a vast selection of templates to quickly assemble
                stunning digital signage content. Are you prepared to be
                astonished?
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-full bg-brand_blue px-6 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-brand_blue/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-brand_blue"
            >
              {"Let's start"}
              <span className="text-2xl  " aria-hidden="true">
                ›
              </span>
            </Link>
            {/* <Link
              href="#"
              className="rounded-full border border-solid px-6 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="text-2xl" aria-hidden="true"></span>
              Download
            </Link> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BannerCTA;
