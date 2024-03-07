import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import bgImage from "../../../public/Images/corporate_bg_image.jpg";

export default function BannerAbout() {
  return (
    <div className="relative w-full isolate overflow-hidden bg-primary">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl z-30 ">
      

          {/* <div className="mt-10 sm:mt-12 lg:mt-16"></div> */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our Vision: SignageBot.com envisions a world where digital signage
            is not just seen but is interactive, intelligent, and intuitively
            integrated into our daily lives. Our mission is to lead this
            revolution, transforming public spaces into dynamic, smart
            environments that communicate, connect, and engage with people in
            entirely new ways.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Innovation at Our Core: Born at the intersection of technology and
            creativity, SignageBot.com combines AI, IoT, and robotics to push
            the boundaries of what digital signage can achieve. Our team is
            dedicated to delivering solutions that not only meet the needs of
            today but also anticipate the demands of tomorrow.
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-300">
            Today, thousands of teams around the globe — from early-stage
            startups to public companies — use Linear to build their products.
            Linear helps them to focus on what they do best: Crafting software
            experiences that feel magical again.
          </p> */}
        </div>
        <div className="mx-auto mt-16 flex max-w-xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-md lg:flex-none xl:ml-32">
          <div className="absolute bottom-0 h-60 w-full xl:inset-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <Image
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src={bgImage}
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />

                <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <Image
                    className="w-full"
                    // src={feature.image}
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
