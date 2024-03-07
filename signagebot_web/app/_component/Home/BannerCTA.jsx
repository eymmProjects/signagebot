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
              How can we help?
            </h1>
            <div className="mx-auto  max-w-7xl">
              <p className="mt-6 text-lg leading-8 font-light text-white">
                Why would your business need Digital Signage? Simply put, it
                will elevate your brand, engage your audience and make a lasting
                impression on your customers. Digital signage can improve your
                business by effectively attracting and engaging customers,
                delivering targeted messages, and increasing brand awareness in
                a dynamic and impactful way. It will boost your business with
                real-time updates, data-driven insights, and visually appealing
                content, driving sales and customer loyalty. Best of all, you
                can open your FREE account and start building your presentation
                right now. Manage your screens and do it at no cost. Choose from
                hundreds of templates and create an amazing digital signage
                presentation with just a few clicks. Are you ready to be amazed?
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
