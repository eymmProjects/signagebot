import { useId } from "react";
import Link from "next/link";
import { Border } from "../../_component/ui/Border";
import { Button } from "../../_component/ui/Button";
import { Container } from "../../_component/ui/Container";
// import { FadeIn } from "@/components/FadeIn";
// import { Offices } from "../../_component/ui/Offices";

function TextInput({ label, ...props }) {
  let id = useId();

  return (
    <div className=" group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-4 ring-transparent transition focus:border-white focus:outline-none focus:ring-white/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-white peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-white"
      >
        {label}
      </label>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="lg:order-last">
      <form>
        <h2 className="font-display text-3xl pb-10 font-semibold text-white">
          Contact With Experts
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-brand_black/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
        </div>
        <Link
          href="/signup"
          className=" inline-flex font-semibold transition text-white text-xs bg-brand_blue hover:bg-brand_blue/50 mt-10 p-3  px-4 py-2 rounded-2xl "
        >
          {"Let's work together"}
        </Link>
      </form>
    </div>
  );
}

function ContactDetails() {
  return (
    <div>
      <h2 className="sm:text-4xl font-display text-3xl tracking-tight pb-14 font-semibold text-white  ">
        Contact Us
      </h2>
      <h2 className="font-display text-2xl font-semibold text-white">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600 ">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>

      {/* <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" /> */}

      <Border className=" pt-10">
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[["Copenhagen", " 1 Carlsberg Gate   1260, København, Denmark"]].map(
            ([label, email]) => (
              <div key={email}>
                <dt className="font-semibold text-white/60">{label}</dt>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-neutral-600 hover:text-white"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            )
          )}
        </dl>
      </Border>
      <Border className="mt-10 pt-10">
        <h2 className="font-display text-2xl font-semibold text-white">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Email", "info@teqhub.io"],
            ["Tel. No.", "+31 6 87638339"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-white/60">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-white"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </div>
  );
}

export const metadata = {
  title: "Contact Us",
  description: "Let’s work together. We can’t wait to hear from you.",
};

export default function Contact() {
  return (
    <>
      <Container className="pb-36 mt-14 sm:mt-32 lg:mt-20">
        <div className="grid grid-cols-1 gap-x-16 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <div className="max-w-3xl">
            <ContactDetails />
          </div>
        </div>
      </Container>
    </>
  );
}
