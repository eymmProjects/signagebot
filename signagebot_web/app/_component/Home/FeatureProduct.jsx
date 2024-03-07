import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Dynamic Content Adaptation",
    description:
      "Content that evolves based on viewer demographics and engagement. ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Intelligent Scheduling",
    description:
      "AI algorithms ensure your message reaches the right audience at the right time.",
    icon: LockClosedIcon,
  },
  {
    name: "Seamless Device Integration",
    description:
      "From screens to sensors, all your devices work together in harmony.",
    icon: ServerIcon,
  },
  {
    name: "Interactive Experiences",
    description:
      " Engage audiences with displays that move, respond, and interact in real-time.",
    icon: ServerIcon,
  },

  {
    name: "Strategy and Consulting",
    description:
      " : Let our experts help you craft a digital signage strategy that stands out.",
    icon: ServerIcon,
  },
  {
    name: "Custom Development",
    description:
      "  Tailored solutions that perfectly fit your unique needs and challenges.",
    icon: ServerIcon,
  },
  {
    name: "Full Support and Training",
    description:
      " From installation to ongoing support, we're with you every step of the way.",
    icon: ServerIcon,
  },
];

import imageSlide from "../../../public/Images/Smart-Wayfinding-768x768.jpg";
import Image from "next/image";

export default function Product() {
  return (
    <div className="overflow-hidden w-full bg-primary py-24 sm:py-32">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" items-center mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Image
            src={imageSlide}
            alt="Product screenshot"
            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-brand_blue">
                Product & Services
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                AI-Powered Signage Platform:
              </p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-brand_blue"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
