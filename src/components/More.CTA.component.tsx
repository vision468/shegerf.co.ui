"use client";
import { RiMoreFill } from "@remixicon/react";
import { Button, ButtonProps } from "@tremor/react";
type MoreCTAProps = {} & ButtonProps;

const MoreCTA = ({ children, className, ...props }: MoreCTAProps) => {
  return (
    <Button
      {...props}
      className={`items-stretch ${className}`}
      icon={() => <RiMoreFill />}
      iconPosition="right"
    >
      <span>{children}</span>
    </Button>
  );
};

export default MoreCTA;
