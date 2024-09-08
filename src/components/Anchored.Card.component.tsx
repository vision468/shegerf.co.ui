"use client";
import { RiMoreFill } from "@remixicon/react";
import { Button } from "@tremor/react";
import { HTMLAttributes } from "react";
type AnchoredBoxProps = {} & HTMLAttributes<HTMLDivElement>;

const AnchoredBox = ({ children, className, ...props }: AnchoredBoxProps) => {
  return (
    <div
      className={`${className} flex flex-col shadow-tremor-card rounded-tremor-default bg-tremor-background  min-w-[384px] md:w-[512px] p-8`}
    >
      <hgroup className="flex-1 place-content-center">
        <h4 className="text-tremor-label text-tremor-brand-subtle">
          date text
        </h4>
        <h1 className="text-tremor-metric font-bold text-tremor-brand">
          title
        </h1>
      </hgroup>
      <br />
      <div className="w-full bg-tremor-content-subtle rounded-tremor-small border-dashed border place-self-end p-2">
        <div>
          {children || (
            <p>
              Irure aute et non aliqua quis minim et commodo quis anim nulla ut
              ullamco velit.
            </p>
          )}
        </div>
        <br />
        <Button
          variant="light"
          icon={() => <RiMoreFill />}
          iconPosition="right"
          className="items-stretch float-left left-0 bg-tremor-background-muted rounded-tremor-small p-1"
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default AnchoredBox;
