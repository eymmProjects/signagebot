import Image from "next/image";
import ImageProduct from "../../../public/Images/Media-Wall-1-1024x1024.jpg";

const features = [
  {
    name: "Dynamic Content Adaptation",
    description:
      "Content that evolves based on viewer demographics and engagement. ",
  },
  {
    name: "Intelligent Scheduling",
    description:
      "AI algorithms ensure your message reaches the right audience at the right time.",
  },
  {
    name: "Seamless Device Integration",
    description:
      "From screens to sensors, all your devices work together in harmony.",
  },
  {
    name: "Interactive Experiences",
    description:
      " Engage audiences with displays that move, respond, and interact in real-time.",
  },

  {
    name: "Strategy and Consulting",
    description:
      "Let our experts help you craft a digital signage strategy that stands out.",
  },
  {
    name: "Custom Development",
    description:
      "  Tailored solutions that perfectly fit your unique needs and challenges.",
  },
  {
    name: "Full Support and Training",
    description:
      " From installation to ongoing support, we're with you every step of the way.",
  },
];

export default function FeatureProduct2() {
  return (
    <div className="bg-brand_black w-full">
      <div aria-hidden="true" className="relative">
        <Image
          src={ImageProduct}
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand_black" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Product & Services
          </h2>
          <p className="mt-4 text-gray-500">AI-Powered Signage Platform</p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-white">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
