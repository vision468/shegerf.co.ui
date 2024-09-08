import { Button } from "@tremor/react";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import CallCTA from "./Call.CTA.component";
import MoreCTA from "./More.CTA.component";
type HeroProps = {} & HTMLAttributes<HTMLDivElement>;

const Hero = ({ children, className, ...props }: HeroProps) => {
  return (
    <section
      {...props}
      className={`min-h-[512px] relative w-full flex md:flex-row-reverse flex-col gap-0 box-border overflow-hidden ${className}`}
    >
      {/* Picture */}
      <div className="min-h-[256px] md:w-1/2 md:flex-1 relative">
        <Image
          src={"/hero_background.png"}
          alt="company picture"
          className="object-cover"
          fill
        />
      </div>
      {/* Content */}
      <div className="flex-1 flex justify-center items-center bg-tremor-background-muted">
        <article className="flex flex-col justify-center items-center  h-64 gap-16 m-8 md:m-16">
          <hgroup className="flex-1">
            <h1 className="text-tremor-metric text-tremor-brand font-bold">
              The main Title
            </h1>
            <br />
            <h3 className="text-tremor-title text-tremor-brand-subtle">
              Et duis velit nostrud tempor ea adipisicing sint laboris
              consectetur magna aute laborum magna.
            </h3>
          </hgroup>
          <div className="flex flex-row  w-full gap-8">
            <CallCTA />
            <MoreCTA variant="secondary">Learn more</MoreCTA>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
