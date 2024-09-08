"use client";
import { RiPhoneFill } from "@remixicon/react";
import { Button } from "@tremor/react";
import type { ButtonProps } from "@tremor/react";
type CallCATProps = {} & ButtonProps;

const CallCTA = ({ children, className, ...props }: CallCATProps) => {
  return (
    <Button
      {...props}
      className={`${className}`}
      icon={() => <RiPhoneFill color="white" />}
      iconPosition="left"
    >
      <span className="mx-2 text-tremor-brand-inverted">
        {children || "Call"}
      </span>
    </Button>
  );
};

export default CallCTA;
