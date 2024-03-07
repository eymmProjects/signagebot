import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const features = [
  {
    name: "AI",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: " Education",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Dynamic",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Intelligent",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
  {
    name: "Displays in retail",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
  {
    name: "Healthcare",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

const caseStudy = () => {
  return (
    <div className="bg-primary py-14">
      <div className="mx-auto max-w-5xl ">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mx-auto text-5xl max-w-[460px] pt-20 tracking-tight text-white sm:text-6xl mb-10">
            Innovative Success Stories
          </h1>
        </div>

        <div className="mx-auto max-w-7xl  lg:text-center">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore how businesses and organizations have transformed their
            spaces with our AI, IoT, and robotics-enabled digital signage
            solutions. Witness the impact of dynamic, intelligent displays in
            retail, healthcare, education, and more.
          </p>
        </div>
      </div>

      {/*  */}
      <div className=" bg-primary sm:py-32">
        <div className="mx-auto max-w-5xl ">
          <div className="mx-auto max-w-2xl sm:mt-10 lg:mt-5 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand_blue">
                    <feature.icon
                      className="h-5 w-5 flex-none text-brand_violet"
                      aria-hidden="true"
                    />
                    <h1 className="text-white">{feature.name}</h1>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6"></p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default caseStudy;
