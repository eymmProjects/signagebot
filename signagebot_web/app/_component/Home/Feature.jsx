import React from "react";
import styles from "../Home/Feature.module.css";
import Image from "next/image";
import ImagePlaceholder from "../../../public/Images/Robohub.png";

export const Feature = () => {
  return (
    <div className="bg-brand_black w-full">
      <div className="bg-brand_black">
        <div className="relative isolate overflow-hidden  ">
          <div className="mx-auto text-center max-w-7xl py-10 pb-10  lg:grid lg:grid-cols-1 lg:gap-x-8 lg:pt-20 lg:px-8 sm:pt-28 ">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto w-full text-center flex justify-center">
                <div className="max-w-lg">
                  <h1 className=" text-4xl font-bold tracking-tight text-white-800 sm:text-6xl">
                    Enhance Your Advertising
                  </h1>
                  <div className="">
                    <span className=" text-2xl font-semibold leading-10 text-white">
                      Impact with Stunning Visuals
                    </span>
                  </div>
                  {/* <DividerWithoutPadding classNameProps="pt-10" /> */}
                  <p className="mt-6 text-lg leading-8 text-gray-400">
                    {
                      "LST offers superior-quality images that shine up to 10000 nits of brightness, outshining competitors in any setting. This exceptional luminance boosts your advertising's effectiveness, captivating the attention of those passing by."
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* image */}
            {/* <div className=" sm:mt-24 md:mx-auto md:max-w-md lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 -z-10 -mr-10  bg-primary shadow-xl  md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="flex justify-end shadow-lg md:rounded-3xl">
                <div
                  className={`${styles.glossy}  flex-col overflow-hidden relative z-[1] flex min-h-[300px] mt-0 w-[471px] max-w-full items-center pt-80 pb-12 px-5 self-start max-md:pt-24`}
                >
                  <Image
                    alt="props"
                    loading="lazy"
                    src={ImagePlaceholder}
                    className="absolute z-[-1] h-full w-[300px] object-cover object-center inset-0  "
                  />
                  <div className="absolute z-0 h-full w-full bg-gradient-to-b from-transparent to-black inset-0"></div>

                  <div className="relative flex w-[265px] max-w-full flex-col items-stretch mt-52">
                    <div className="text-stone-50 text-center text-2xl leading-8 tracking-wide mt-7">
                      Designed for modern
                    </div>
                    <div className="text-slate-300 text-center text-base leading-5 mt-5">
                      Complete any action in seconds with the global command
                      menu.
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className=" sm:h-10" />
        </div>
      </div>
    </div>
  );
};
