import Link from "next/link";
import React from "react";
// import BannerImg from "@/public/Images/Home_screens.png";
import BannerImg from "../../../public/Images/signagebot.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Add this line at the top

const HeroSection = () => {
  return (
    <div className="isolate bg-primary mt-20">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0C0D23" />
              <stop offset={1} stopColor="#06051D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* {navbar} */}
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-32">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-center max-w-screen-xl mx-auto"
            >
              <h1 className="text-3xl  tracking-tight text-white font-medium sm:text-6xl max-w-3xl mx-auto">
                Revolutionize Your Displays with AI and Robotics
              </h1>
              <div className="hidden mt-5 sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full bg-gray-800 py-1 px-3 text-sm leading-6 text-white-600 0 hover:ring-gray-900/20">
                  Welcome to the Future with SignageBot.com
                  <Link href="#" className="font-semibold text-white-600">
                    <span className="text-xl ml-2" aria-hidden="true">
                      ›
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mx-auto  max-w-3xl">
                <p className="mt-6 text-lg leading-8  text-white">
                  Dive into the next era of digital signage with SignageBot.com,
                  where AI power meets IoT efficiency and robotics innovation.
                  Designed for forward-thinking businesses, our advanced digital
                  signage solutions redefine how you communicate with your
                  audience. From interactive displays that think to screens that
                  adapt in real-time, SignageBot.com is your partner in creating
                  unforgettable visual experiences.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-full bg-brand_violet px-6 py-1.5 text-base font-semibold leading-7 bg-brand_blue text-white shadow-sm hover:bg-brand_blue/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                  <span className="text-2xl  " aria-hidden="true">
                    {" "}
                    ›{" "}
                  </span>
                </Link>
              </div>
            </div>

            <Image
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-offset="300"
              src={BannerImg}
              alt="App screenshot"
              width={3432}
              height={2442}
              className="mt-16 rounded-md bg-white/5 pl-5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
            />
          </div>

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4e4b87" />
                  <stop offset={1} stopColor="#8d8bb1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
