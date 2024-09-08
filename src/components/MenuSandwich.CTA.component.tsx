"use client";
import { RiMenuFill } from "@remixicon/react";
import { Button, ButtonProps } from "@tremor/react";
type MenuSandwichProps = {} & ButtonProps;

const MenuSandwichCTA = ({
  children,
  className,
  variant,
  ...props
}: MenuSandwichProps) => {
  return (
    <Button
      {...props}
      variant={variant || "secondary"}
      className={`items-stretch ${className}`}
      icon={() => <RiMenuFill />}
      iconPosition="right"
    >
      <span>{children}</span>
    </Button>
  );
};

export default MenuSandwichCTA;
